import { WFFormComponent } from "@xatom/core"
import supabase from "../supabase";

export const signUp = () => {
    const form = new WFFormComponent<{
        email: string;
        password: string;
    }>(`[xa-type="sign-up-form"]`);

    form.onFormSubmit((data) => {
        form.showForm();
        form.disableForm();
        form.updateSubmitButtonText("Please wait...");

        supabase.auth.signUp({
            email: data.email,
            password: data.password
        })
        .then((data) => {
            if (data.error) {
                form.updateTextViaAttrVar({
                    error:
                      data.error.message ||
                      "Unable to create account please try again",
                  });
                  form.showErrorState();
                  form.updateSubmitButtonText("Create Account");
                  return;
            }

            form.showSuccessState();
        })
        .catch((err) => {
            form.updateTextViaAttrVar({
                error:
                  err.message ||
                  "Unable to create account please try again",
              });
              form.showErrorState();
      
              form.updateSubmitButtonText("Create Account");
        })
        .finally(() => {
            form.enableForm();
        })
    })
}