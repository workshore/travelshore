import { navigate, WFAuth, WFAuthMiddleware } from "@xatom/core";
import supabase from "../supabase";

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
    supabase.auth.signOut().then(() => {
        userAuth.logout();
        navigate("/sign-in");
    })
}


/**
 * Middleware function for user routing.
 */
export const userMiddleware = new WFAuthMiddleware(
    userAuth
);