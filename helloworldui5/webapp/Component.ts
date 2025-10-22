import BaseComponent from "sap/ui/core/UIComponent";
import { createDeviceModel } from "./model/models";
import Log from "sap/base/Log";

/**
 * @namespace apps.dflc.helloworldui5
 */
export default class Component extends BaseComponent {

    public static metadata = {
        manifest: "json",
        interfaces: [
            "sap.ui.core.IAsyncContentCreation"
        ]
    };

    public init(): void {
        // call the base component's init function
        super.init();

        // set the device model
        this.setModel(createDeviceModel(), "device");

        Log.info("Hello-World Information Log");
        Log.debug("Hello-World Debug Log");
        Log.warning("Hello-World Warning Log");
        Log.error("Hello-World Error Log");
        Log.fatal("Hello-World Fatal Log");

        // enable routing
        this.getRouter().initialize();
    }
}