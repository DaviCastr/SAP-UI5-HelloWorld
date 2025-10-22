import MessageBox from "sap/m/MessageBox";
import Event from "sap/ui/base/Event";
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace apps.dflc.helloworldui5.controller
 */
export default class Main extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {

    }

    public onClickMe(oEvent: Event){
        MessageBox.show("Hello, you clicked me");
    }
}