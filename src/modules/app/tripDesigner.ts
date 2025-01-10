import { navigate, WFComponent } from "@xatom/core";
import { BACKEND_PROTECTED_BASE_URL, REQ_HEADERS, USER_PATHS } from "../../config";

export const overview = () => {
    console.log("overview function executing");
    const startChatBtn = new WFComponent(`[xa-type="start-chat"]`);

    startChatBtn.on("click", () => {
        startChatBtn.updateTextViaAttrVar({
            text: "Please wait..."
        });
        startNewChat();
    });
}

export const startNewChat = async () => {
    try {
        const thread = await fetch(`${BACKEND_PROTECTED_BASE_URL}/assistant/createThread`, {
            method: 'POST', 
            headers: REQ_HEADERS
        });
    
        if (!thread.ok) {
            throw new Error("Invalid session")
        }
        
        const res = await thread.json();
        if(thread.ok) {
            navigate(`${USER_PATHS.chatDemo}?id=${res.emptyThread.id}`)
        }
    } catch (error) {
        console.log("There was an issue creating the thread...", error);
    }
}