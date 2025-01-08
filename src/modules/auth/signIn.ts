import { navigate, WFFormComponent } from "@xatom/core";
import axios from 'axios';
import { BACKEND_BASE_URL, USER_PATHS } from "../../config";
// import supabase from "../supabase";

export const signIn = async () => {
    const form = new WFFormComponent<{
        email: string;
        password: string;
    }>(`[xa-type="signin-form"]`);

    const submitButton = form.getChildAsComponent(`[xa-type="signin-btn"]`);
    const submitButtonWrapper = form.getChildAsComponent(`.form-button-wrapper`);


    // accepted current change
    submitButton.setAttribute("value", "Continue");
    submitButton.removeAttribute("disabled");
    submitButton.removeCssClass("is-disabled");
    submitButtonWrapper.removeCssClass("is-disabled");
    form.removeCssClass("pointer-events-off");

    form.onFormSubmit((data) => {
        form.showForm();
        form.disableForm();
        form.updateSubmitButtonText("Please wait...");

        if (data && data["email"] !== '' && data["password"] !== '') {
            let email = data["email"], password = data['password'];
            console.log(email, password);
            fetch(`${BACKEND_BASE_URL}/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json', // This tells the server it's JSON
                },
                body: JSON.stringify({ email: email, password: password }),
            }).then(async (data) => {
                if (!data.ok) {
                    form.updateTextViaAttrVar({
                        error: "Unable to login. Please try again."
                    });
                    form.showErrorState();
                    form.updateSubmitButtonText("Login");
                    return;
                }

                const res = await data.json();
                console.log(res)
                const userInfo = {
                    "email": res.data.session.user.email,
                    "firstName": res.data.user.user_metadata.firstName,
                    "lastName": res.data.user.user_metadata.lastName,
                    "token": res.data.session.access_token
                }
                localStorage.setItem('@bw-user-auth', JSON.stringify(userInfo));
                form.updateSubmitButtonText("Redirecting...");
                navigate(USER_PATHS.chatDemo);
            }).
                catch((error) => {
                    form.updateTextViaAttrVar({
                        error: error.message ||
                            "Unable to login. Please try again."
                    });
                    form.showErrorState();
                    form.updateSubmitButtonText("Login");
                    return;
                }).
                finally(() => {
                    form.enableForm();
                });
        }
    });
}