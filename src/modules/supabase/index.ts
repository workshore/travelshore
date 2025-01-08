import { createClient, SupabaseClientOptions } from "@supabase/supabase-js";
import { logout, setUser } from "../auth";
import { BACKEND_BASE_URL, USER_PATHS } from "../../config";
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

// const supabaseURL = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

// const supabase = createClient(supabaseURL, supabaseKey, options);

export const initSupabase = (cb: () => void) => {
    const localSessionInfo = JSON.parse(localStorage.getItem("@bw-user-auth"));

    if (localSessionInfo) {
        fetch(`${BACKEND_BASE_URL}/auth/getSession`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localSessionInfo.token}`
            },
        }).then(async (res) => {
            if (!res.ok) { throw new Error("Invalid session") }
            if (res.ok) {
                const data = await res.json();
                console.log("User session active", data);
                setUser(
                    `${data.user.user_metadata.firstName} ${data.user.user_metadata.lastName}`,
                    data.user.email
                );
            }
        }).catch((err) => {
            logout();
        }).finally(cb);
    } else {
        cb();
    }

    // supabase.auth.getSession().
    // then((data) => {
    //     if (!data.error && data.data && data.data.session) {
    //         setUser(
    //             data.data.session.user.user_metadata.fullName,
    //             data.data.session.user.email
    //         )
    //     }
    // }).catch((err) => {
    //     console.log(err);
    // }).finally(cb);

    // supabase.auth.getSession().
    // then((data) => { console.log(data); }).
    // catch((err) => { console.log(err); })
}

// export default supabase;