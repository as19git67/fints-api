import { Connection } from "./types";
import { HIUPD } from "./segments";
import { Request } from "./request";
import { TanMethod } from "./tan-method";
/**
 * Properties passed to configure a `Dialog`.
 */
export declare class DialogConfig {
    /**
     * The product ID that was assigned by ZKA
     */
    productId: string;
    /**
     * The banks identification number (Bankleitzahl).
     */
    blz: string;
    /**
     * The username or identification number.
     */
    name: string;
    /**
     * The pin code or password used for authenticating with the fints server.
     */
    pin: string;
    /**
     * The system's id. This id needs to be stored across all dialogs and will be assigned
     * by the server at the first request.
     */
    systemId: string;
    /**
     * An instance implementing `Connection` used for performing requests.
     */
    connection: Connection;
}
/**
 * A dialog consisting of multiple related requests and responses.
 */
export declare class Dialog extends DialogConfig {
    /**
     * All messages sent within a dialog are numbered.
     * This counter is kept here.
     */
    msgNo: number;
    /**
     * A unique id for the dialog.
     * Assigned by the server as response to the initial request.
     * For the initial request a `0` needs to be sent.
     */
    dialogId: string;
    /**
     * A list of allowed TAN methods as configured by the server.
     */
    tanMethods: TanMethod[];
    /**
     * The server will only accept a certain version for the HISALS segment.
     * This version defaults to the latest version (6).
     * The server's maximum supported version can be parsed from the initial requests and is stored here.
     */
    hisalsVersion: number;
    /**
     * The server will only accept a certain version for the HIKAZS segment.
     * This version defaults to the latest version (6).
     * The server's maximum supported version can be parsed from the initial requests and is stored here.
     */
    hikazsVersion: number;
    /**
     * The server will only accept a certain version for the HICDB segment.
     * This version defaults to the latest version (1).
     * The server's maximum supported version can be parsed from the initial requests and is stored here.
     */
    hicdbVersion: number;
    /**
     * A list of supported SEPA pain-formats as configured by the server.
     */
    painFormats: string[];
    hiupd: HIUPD[];
    constructor(config: DialogConfig);
    /**
     * Send a synchronization request to the server.
     * Only one synchronization is needed per dialog.
     * This is most likely the initial request sent.
     * It will be answered with the system's id and a list of supported TAN methods.
     * The supported HISALS and HIKAZS version can also be parsed from this request.
     *
     * @return The response as received by the server.
     */
    sync(): Promise<void>;
    /**
     * Send the initializing request to the server.
     * The dialog is ready for performing custom requests afterwards.
     */
    init(): Promise<void>;
    /**
     * End the currently open request.
     */
    end(): Promise<void>;
    /**
     * Send a custom request to the fints server and return the received response.
     *
     * @param request The request to send to the server.
     *
     * @return The response received from the server.
     */
    send(request: Request): Promise<import("./response").Response>;
}
