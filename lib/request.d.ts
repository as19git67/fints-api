import { Segment } from "./segments";
import { TanMethod } from "./tan-method";
/**
 * Properties used to constructe a `Request`.
 */
export declare class RequestConfig {
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
     * An optional TAN for performing this request.
     * Can be omitted if no TAN is needed to perform the request.
     */
    tan: string;
    /**
     * The system's id. This id needs to be stored across all dialogs and will be assigned
     * by the server at the first request.
     */
    systemId: string;
    /**
     * The unique id of the message's dialog.
     */
    dialogId: string;
    /**
     * All messages sent within a dialog are numbered.
     * This requests number.
     */
    msgNo: number;
    /**
     * A list of allowed TAN methods as configured by the server.
     */
    tanMethods: TanMethod[];
    /**
     * All segments that should be transmitted in the HNVSD segment of the request.
     */
    segments: Segment<any>[];
}
/**
 * A single request holding multiple segments.
 * Will likely embedded in a dialog.
 */
export declare class Request extends RequestConfig {
    /**
     * A unique identifier for linking a signature header to its footer.
     * Needs to be randomly generated and unique per dialog.
     * All references in all segments need to be equal per message.
     */
    secRef: number;
    constructor(config: Partial<RequestConfig>);
    /**
     * Determines if a TAN method with a "999" security function is available.
     * This determines whether profile version 2 can be used.
     */
    private readonly hasNo999SecurityFunction;
    /**
     * Use security profile version 2 if the server supports it.
     * Will be `1` or `2`, depending on the server's capabilities.
     */
    private readonly profileVersion;
    /**
     * Determines the security function to use. Will default to the first one if the "999" security function is
     * unavailable.
     */
    private readonly securityFunction;
    /**
     * Returns the total number of segments in this request, including all header meta segments.
     */
    private readonly segmentCount;
    /**
     * An array of all segments, including the HNVSD segment wrapping the user payload segments.
     */
    private readonly fullSegments;
    /**
     * Generate a textual representation for debug purposes.
     */
    readonly debugString: string;
    /**
     * Serialize the whole request into a string that can be sent to the server.
     */
    toString(): string;
}
