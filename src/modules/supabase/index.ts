import { createClient, SupabaseClientOptions } from "@supabase/supabase-js";
import { forceLogout, logout, setUser } from "../auth";
import { BACKEND_BASE_URL, createReqHeaders, getRefreshToken, REQ_HEADERS, setRefreshToken, USER_PATHS } from "../../config";
import { navigate } from "@xatom/core";

const options: SupabaseClientOptions<string> = {
    db: {
        schema: "public",
    },
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    }
}

export const initSupabase = (cb: () => void) => {
    const localSessionInfo = JSON.parse(localStorage.getItem("@bw-user-auth"));
    if (localSessionInfo) {
        fetch(`${BACKEND_BASE_URL}/auth/getSession`, {
            method: "GET",
            headers: createReqHeaders(localSessionInfo.token),
        }).then(async (res) => {
            if (!res.ok || res.status === 401) {
                throw new Error("Invalid session. Token expired.")
            }
            if (res.ok) {
                const data = await res.json();
                console.log("User session active", data);
                setUser(
                    `${data.user.user_metadata.firstName} ${data.user.user_metadata.lastName}`,
                    data.user.email
                );
            }
        }).catch(async (err) => {
            // forceLogout();
        }).finally(cb);
    } else {
        if (window.location.pathname !== `${USER_PATHS.signIn}`) {
            // forceLogout();
        } else {
            // cb();
        }
    }
}