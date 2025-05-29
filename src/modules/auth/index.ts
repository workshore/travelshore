import { navigate, WFAuth, WFAuthMiddleware } from "@xatom/core";
import { BACKEND_BASE_URL, createReqHeaders, USER_PATHS } from "../../config";
import { app } from "../../routes";
// import supabase from "../supabase";

/**
 * Initialise WFAuth Instance with user data, roles & config
 */
export const userAuth = new WFAuth<
    {
        fullName: string;
        email: string;
    },
    "GUEST" | "USER",
    {}
>();

/**
 * Set default user role
 */
userAuth.setRole("GUEST");

/**
 * 
 * Set user method to set user data & role
 */
export const setUser = (
    fullName: string,
    email: string
) => {
    userAuth.setUser({
        fullName,
        email
    });
    userAuth.setRole("USER");
}

/** 
 * Logout method to logout and navigate to login page.
 */
export const logout = () => {
    const localSessionInfo = JSON.parse(localStorage.getItem("@bw-user-auth"));

    fetch(`${BACKEND_BASE_URL}/auth/signout`, {
        method: "GET",
        headers: createReqHeaders(localSessionInfo.token),
    }).then(async (res) => {
        localStorage.removeItem("@bw-user-auth");
        userAuth.logout();
        navigate(USER_PATHS.signIn);
    }).catch((err) => {
        console.log("Error while logging out", err.message);
    });
}

/**
 * Force logout when session expires.
 */
export const forceLogout = () => {
    // console.log(USER_PATHS.signIn);
    //     localStorage.removeItem("@bw-user-auth");
    //     userAuth.logout();
    //     navigate(USER_PATHS.signIn);
}


/**
 * Middleware function for user routing.
 */
export const userMiddleware = new WFAuthMiddleware(
    userAuth
);