import { navigate, WFComponent, WFFormComponent } from "@xatom/core";
import { send } from "process";
import { BACKEND_PROTECTED_BASE_URL, REQ_HEADERS, USER_PATHS } from "../../config";
import { startNewChat } from "./tripDesigner";
import jsPDF from "jspdf";

export const chatbot = (data: { id: string }) => {
    if (document.referrer === "" || new URL(document.referrer).origin !== window.location.origin) {
        // kick back to dashboard if landed accidentally
        navigate({
            to: USER_PATHS.tripDesigner,
            type: "replace"
        });
    }
    console.log("chatbot function executes");

    let thread_id = data.id;

    // Get chatbot component
    const chatbot = new WFComponent(`[xa-type="chatbot-component"]`);
    const topbar = new WFComponent(`[xa-type="topbar"]`);
    const newChatBtn = topbar.getChildAsComponent(`[xa-type="p-btn"]`);

    // Get chat toolbar elements
    const chatToolbar = new WFFormComponent(`[xa-type="input-form"]`);
    const chatInput = chatbot.getChildAsComponent<HTMLInputElement>(`#user-input`);
    const sendBtn = chatbot.getChildAsComponent(`[xa-type="send-btn"]`);
    const downloadBtn = chatbot.getChildAsComponent(`[xa-type="download-btn"]`);
    const submit = chatToolbar.getChildAsComponent(`[xa-type="submit"]`);


    // Get chat area elements
    const chatArea = chatbot.getChildAsComponent(`[xa-type="chat-area"]`);
    const userMsgBlock = chatbot.getChildAsComponent(`[xa-type="user-msg-block"]`);
    const botMsgBlock = chatbot.getChildAsComponent(`[xa-type="assistant-msg-block"]`);

    let itineraries = [], running: boolean = false;

    // Handle page refresh;
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
        chatToolbar.disableForm();
        navigate({
            to: USER_PATHS.tripDesigner,
            type: "replace"
        });
    }

    // Handle new chat button
    newChatBtn.on("click", () => {
        newChatBtn.updateTextViaAttrVar({
            text: "Please wait..."
        });
        startNewChat();
    });

    // Function to add user message
    const addUserMsg = (content: string) => {
        const msgClone = userMsgBlock.getCloneAsComponent();
        const msgText = msgClone.getChildAsComponent(`[xa-var="msg"]`);
        msgText.getElement().innerHTML = `${content}`;
        chatArea.appendChild(msgClone);
    }

    // Function to add bot message block
    const addBotMsgBlock = () => {
        const msgClone = botMsgBlock.getCloneAsComponent();
        chatArea.appendChild(msgClone);
        return msgClone;
    }

    const revealBotMsg = (msgClone, content) => {
        const msgText = msgClone.getChildAsComponent(`[xa-var="msg"]`);
        const msgLoading = msgClone.getChildAsComponent(`.chatbot_typing-wrap`);

        msgText.getElement().innerHTML = `${content}`;
        msgLoading.addCssClass("hide");
        msgText.removeCssClass("hide");
    }

    // user input field expands automatically
    chatInput.on('input', (e) => {
        chatInput.setStyle({
            height: 'auto'
        });
        chatInput.setStyle({
            height: `${chatInput.getElement().scrollHeight}px`
        });

        if (chatInput.getElement().value !== '') {
            sendBtn.removeCssClass("is-disabled");
        } else {
            sendBtn.addCssClass("is-disabled");
        }
    });

    //submit form on send button click
    sendBtn.on("click", () => {
        submit.getElement().click();
    });

    // On user input.
    chatToolbar.onFormSubmit(async (data) => {
        console.log("executess form submit");
        if (data["user-input"] !== '') {
            let userInput = data["user-input"].toString().trim();
            try {
                // append message to chat area
                addUserMsg(formatBotResponse(userInput));
                sendBtn.addCssClass("is-disabled");
                chatInput.getElement().value = '';
                chatInput.setStyle({
                    height: 'auto'
                });

                // append loading bot message
                const latestBotMsg = addBotMsgBlock();

                // add message to thread
                const addMessageResponse = await fetch(`${BACKEND_PROTECTED_BASE_URL}/assistant/createMessage`, {
                    method: 'POST',
                    headers: REQ_HEADERS,
                    body: JSON.stringify({
                        id: thread_id,
                        message: {
                            role: "user",
                            content: userInput
                        }
                    })
                });

                if (!addMessageResponse.ok) {
                    throw new Error("Failed to add message to thread");
                }

                // create a run 
                const runResponse = await fetch(`${BACKEND_PROTECTED_BASE_URL}/assistant/createRun`, {
                    method: 'POST',
                    headers: REQ_HEADERS,
                    body: JSON.stringify({
                        thread: thread_id,
                    })
                });

                if (!runResponse.ok) { throw new Error("Failed to create run"); }

                let runData = await runResponse.json();
                let run_id = runData["run_id"];
                // let _runResponse, messagesResponse;
                let intervalId = setInterval(async () => {
                    try {
                        const _runResponse = await fetch(`${BACKEND_PROTECTED_BASE_URL}/assistant/retrieveRun`, {
                            method: 'POST',
                            headers: REQ_HEADERS,
                            body: JSON.stringify({
                                thread_id: thread_id,
                                run_id: run_id
                            })
                        });

                        const _runData = await _runResponse.json();
                        if (_runResponse.ok && _runData.run.status === "completed") {
                            clearInterval(intervalId);

                            const messagesResponse = await fetch(`${BACKEND_PROTECTED_BASE_URL}/assistant/retrieveMessages`, {
                                method: 'POST',
                                headers: REQ_HEADERS,
                                body: JSON.stringify({
                                    thread_id: thread_id
                                })
                            });

                            if (!messagesResponse.ok) { throw new Error("Failed to retrieve messages"); }

                            const messagesData = await messagesResponse.json();
                            const assistantMessage = (messagesData.messages.data)[0];

                            if (assistantMessage) {
                                let itinerary = extractItineraryDetails(assistantMessage.content[0].text.value);
                                if (itinerary) {
                                    itineraries.push(itinerary);
                                    itineraries = removeDuplicates(itineraries);
                                }
                                revealBotMsg(latestBotMsg, formatBotResponse(assistantMessage.content[0].text.value));
                                sendBtn.removeCssClass("is-disabled");

                                if (itineraries.length) {
                                    downloadBtn.removeCssClass("is-disabled");
                                }
                            }
                        } else {
                            console.log(`Response received: ${_runResponse.status}`);
                        }
                    } catch (error) {
                        console.log('Error retrieving run info:', error);
                    }
                }, 3000);
            } catch (error) {
                console.error(`Error running thread`, error);
            }
        }
    });

    downloadBtn.on("click", () => {
        downloadLatestItinerary(itineraries);
    });
}

/**
 * 
 * @param content : pass the string content receieved from assistant
 * returns a string of formatted bot response
 */
const formatBotResponse = (content: string) => {
    // Step 1: Strip HTML-like tags
    const cleanedResponse = content.replace(/<!--.*?-->/g, '').trim();

    // Step 2: Preserve Markdown formatting and handle line breaks
    // Assuming your chat supports Markdown, you can simply replace '\n' with <br>
    let formattedResponse = cleanedResponse
        .replace(/\n/g, '<br>')  // Replace newlines with <br> for HTML
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') // Bold Markdown **text**
        .replace(/\*(.*?)\*/g, '<i>$1</i>');    // Italics Markdown *text*

    // Remove any leading or trailing `` and whitespace
    formattedResponse = formattedResponse.trim().replace(/^`+|`+$/g, "");

    // Remove unwanted <br> tags at the start or end
    formattedResponse = formattedResponse.replace(/^(<br\s*\/?>)+|(<br\s*\/?>)+$/g, "");

    // Step 3: Return formatted response
    return formattedResponse;
}

const extractItineraryDetails = (response) => {
    // Step 1: Check if it's an itinerary response
    const itineraryRegex = /<!--\s*Itinerary\s+(\d{3}):\s*(.*?)\s*-->/;
    const bodyRegex = /<!--\s*Itinerary Body Start\s*-->([\s\S]*?)<!--\s*Itinerary Body End\s*-->/;

    const itineraryMatch = response.match(itineraryRegex);
    const bodyMatch = response.match(bodyRegex);

    if (itineraryMatch) {
        // Step 2: Extract Itinerary Number and Tagline
        const itineraryNumber = itineraryMatch[1]; // Matches the number (e.g., 001)
        const tripTagline = itineraryMatch[2]; // Matches the tagline (e.g., Trip to Mumbai)

        // Step 3: Extract Itinerary Body
        let itineraryBody = bodyMatch ? bodyMatch[1].trim() : null;

        if (itineraryBody) {
            itineraryBody = `Your ${tripTagline}\n\n${itineraryBody}`;
        }

        return {
            isItinerary: true,
            itineraryNumber,
            tripTagline,
            itineraryBody,
        };
    }

    return null;
}

/**
 * Function to remove duplicates based on itineraryNumber
 * @param itineraries 
 * @returns array of unique itineraries
 */
const removeDuplicates = (itineraries: Array<any>) => {
    // Using a Map to track unique itineraries based on itineraryNumber
    const uniqueItineraries = new Map();

    itineraries.forEach((itinerary) => {
        // Using the itineraryNumber as the unique identifier
        if (!uniqueItineraries.has(itinerary.itineraryNumber)) {
            uniqueItineraries.set(itinerary.itineraryNumber, itinerary);
        }
    });

    // Convert the map back to an array and return it
    return Array.from(uniqueItineraries.values());
};

/**
 * Function to create and download pdf of latest itinerary
 * @param itineraries
 */
const downloadLatestItinerary = (itineraries: Array<any>) => {
    const latestItinerary = itineraries.reduce((latest, current) => {
        return parseInt(current.itineraryNumber) > parseInt(latest.itineraryNumber) ? current : latest;
    });

    const doc = new jsPDF();

    // Set font size
    doc.setFontSize(12);

    // Replace this string with your actual content
    const content = latestItinerary.itineraryBody.replace(/\*\*(.*?)\*\*/g, '$1').replace(/\*(.*?)\*/g, '$1');

    doc.text(content, 10, 10, { maxWidth: 180 });

    // Save the PDF with a name
    doc.save(`${latestItinerary.tripTagline}.pdf`);
}

