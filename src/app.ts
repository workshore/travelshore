import { onReady } from "@xatom/core";
import { initSupabase } from "./modules/supabase";
import { app } from "./routes";

(window as any).WFDebug = true;

onReady(() => {
    initSupabase(() => {
        console.log("script working")
        app();
    })
});