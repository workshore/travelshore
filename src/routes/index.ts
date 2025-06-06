import { navigate, WFRoute } from "@xatom/core";
import { userAuth, userMiddleware } from "../modules/auth";
import { USER_PATHS } from "../config";
import { sidebar } from "../modules/app/sidebar";

export const app = () => {
    new WFRoute(USER_PATHS.landing).execute(() => import("../modules/landing/index").then(({ landing }) => { landing() }));

    new WFRoute(USER_PATHS.authRoute).execute(() => {
        new WFRoute(USER_PATHS.signIn).execute(() => {
            import("../modules/auth/signIn").
                then(({ signIn }) => {
                    signIn();
                })
        });

        new WFRoute(USER_PATHS.signUp).execute(() => {
            import("../modules/auth/signUp").
                then(({ signUp }) => {
                    signUp();
                })
        });

        new WFRoute(USER_PATHS.verification).execute(() => {
            import("../modules/auth/verify").
                then(({ verify }) => {
                    verify();
                })
        });
    });

    new WFRoute(USER_PATHS.appRoute).execute(() => {
        if (userAuth.isLoggedIn()) {
            sidebar();
        }
        new WFRoute(USER_PATHS.tripDesigner).execute(() => {
            import("../modules/app/tripDesigner").
                then(({ overview }) => {
                    overview();
                })
        });

        new WFRoute(USER_PATHS.chatDemo).execute((param: any) => {
            import("../modules/app/chatbot").
                then(({ chatbot }) => {
                    chatbot(param);
                })
        });
    });
}