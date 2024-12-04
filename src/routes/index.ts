import { navigate, WFRoute } from "@xatom/core";
import { userMiddleware } from "../modules/auth";
import { USER_PATHS } from "../config";

export const app = () => {
    new WFRoute(USER_PATHS.landing).execute(() => import("../modules/landing/index").then(({ landing }) => { landing() }));

    new WFRoute(USER_PATHS.authRoute).withMiddleware(userMiddleware, "GUEST", "allow", {
        onError: () => {
            navigate(USER_PATHS.tripDesigner);
        },
    }).execute(() => {
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

    new WFRoute(USER_PATHS.appRoute).withMiddleware(userMiddleware, "USER", "allow", {
        onError: () => {
            navigate(USER_PATHS.landing);
        }
    }).execute(() => {
        new WFRoute(USER_PATHS.tripDesigner).execute(() => {
            import("../modules/app/tripDesigner").
            then(({ overview }) => {
                overview();
            })
        });
    });
}