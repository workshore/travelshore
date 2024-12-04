import { navigate, WFFormComponent } from "@xatom/core"
import supabase from "../supabase";

export const signIn = () => {
    const form = new WFFormComponent<{
        email: string;
        password: string;
    }>(`[xa-type="sign-in-form"]`);

    form.onFormSubmit((data) => {
        form.showForm();
        form.disableForm();
        form.updateSubmitButtonText("Please wait...");

        supabase.auth.
        signInWithPassword({
            email: data.email,
            password: data.password
        }).
        then((data) => {
            if (data.error) {
                form.updateTextViaAttrVar({
                    error: data.error.message ||
                    "Unable to login. Please try again."
                });
                form.showErrorState();
                form.updateSubmitButtonText("Login");
                return;
            }

            form.updateSubmitButtonText("Redirecting...");
            navigate("/dashboard/overview");
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
    })
}