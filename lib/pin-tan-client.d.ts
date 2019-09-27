import { Client } from "./client";
import { Dialog } from "./dialog";
import { Request } from "./request";
import { Segment } from "./segments";
/**
 * Set of options needed to construct a `PinTanClient`.
 */
export interface PinTanClientConfig {
    /**
     * The fints product identification.
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
     * The URL to reach the server at.
     */
    url: string;
    /**
     * If set to `true`, will log all requests performed and responses received.
     */
    debug?: boolean;
}
export declare class PinTanClient extends Client {
    /**
     * Connection used to reach the server.
     */
    private connection;
    /**
     * Configuration for connecting and authenticating.
     */
    protected config: PinTanClientConfig;
    constructor(config: PinTanClientConfig);
    createDialog(): Dialog;
    createRequest(dialog: Dialog, segments: Segment<any>[], tan?: string): Request;
}
