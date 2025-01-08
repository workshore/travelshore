import { WFComponent } from "@xatom/core"
import { logout, userAuth } from "../auth";

export const sidebar = () => {
    const sidebar = new WFComponent(`[xa-type='sidebar']`);
    const logOut = sidebar.getChildAsComponent(`[xa-type='logout']`);
    
    // update user name
    sidebar.updateTextViaAttrVar({
        name: userAuth.getUser().fullName
    })

    logOut.on("click", () => {
        logout();
    })
}