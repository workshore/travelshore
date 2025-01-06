// import { createClient, SupabaseClientOptions } from "@supabase/supabase-js";
// import { setUser } from "../auth";

// const options: SupabaseClientOptions<string> = {
//     db: {
//         schema: "public",
//     },
//     auth: {
//         autoRefreshToken: true,
//         persistSession: true,
//         detectSessionInUrl: true
//     }
// }

// const supabaseURL = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

// const supabase = createClient(supabaseURL, supabaseKey, options);

// export const initSupabase = (cb: () => void) => {
//     supabase.auth.getSession().
//     then((data) => {
//         if (!data.error && data.data && data.data.session) {
//             setUser(
//                 data.data.session.user.user_metadata.fullName,
//                 data.data.session.user.email
//             )
//         }
//     }).catch((err) => {
//         console.log(err);
//     }).finally(cb);

//     // supabase.auth.getSession().
//     // then((data) => { console.log(data); }).
//     // catch((err) => { console.log(err); })
// }

// export default supabase;