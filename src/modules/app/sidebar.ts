import { WFComponent } from "@xatom/core"
import { logout } from "../auth";

export const sidebar = () => {
    const sidebar = new WFComponent(`[xa-type='sidebar']`);
    const logOut = sidebar.getChildAsComponent(`[xa-type='logout']`);

    logOut.on("click", () => {
        logout();
    })
}