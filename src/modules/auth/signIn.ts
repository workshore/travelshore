import { navigate, WFFormComponent } from "@xatom/core"
// import supabase from "../supabase";

export const signIn = async () => {
    console.log("sign in executes");

    const email = 'hari.kishore@workshore.io';
    const password = 'Test1';

    const response = await fetch('https://travelshore-backend-proxy.vercel.app/api', {
        method: 'POST', 
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({ email, password })
    });

    // const form = new WFFormComponent<{
    //     email: string;
    //     password: string;
    // }>(`[xa-type="sign-in-form"]`);

    // form.onFormSubmit((data) => {
    //     form.showForm();
    //     form.disableForm();
    //     form.updateSubmitButtonText("Please wait...");

    //     supabase.auth.
    //     signInWithPassword({
    //         email: data.email,
    //         password: data.password
    //     }).
    //     then((data) => {
    //         if (data.error) {
    //             form.updateTextViaAttrVar({
    //                 error: data.error.message ||
    //                 "Unable to login. Please try again."
    //             });
    //             form.showErrorState();
    //             form.updateSubmitButtonText("Login");
    //             return;
    //         }

    //         form.updateSubmitButtonText("Redirecting...");
    //         navigate("/dashboard/overview");
    //     }).
    //     catch((error) => {
    //         form.updateTextViaAttrVar({
    //             error: error.message ||
    //             "Unable to login. Please try again."
    //         });
    //         form.showErrorState();
    //         form.updateSubmitButtonText("Login");
    //         return;
    //     }).
    //     finally(() => {
    //         form.enableForm();
    //     });
    // })
}