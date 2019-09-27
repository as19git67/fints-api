import { Segment, HIRMS, HIRMG } from "./segments";
import { Constructable } from "./types";
import { ReturnValue } from "./return-value";
import { Request } from "./request";
import { TanMethod } from "./tan-method";
/**
 * A wrapper class for on-demand parsing a response received from the server.
 */
export declare class Response {
    /**
     * A list of all segments with all data groups with all data elements.
     */
    private segmentStrings;
    constructor(data: string);
    /**
     * Find all segments with the specified segment class.
     *
     * @param segmentClass A segment's class. The response should be searched for all segments with a matching type.
     *
     * @return An array of all matching segments. Can be empty if no segements matched the specified type.
     */
    findSegments<T extends Segment<any>>(segmentClass: Constructable<T>): T[];
    /**
     * Find the first segment with the specified segment class.
     *
     * @param segmentClass A segment's class. The response should be searched for a segments with a matching type.
     *
     * @return The deserialized matching segment. Can be `undefined` if no segement matched the specified type.
     */
    findSegment<T extends Segment<any>>(segmentClass: Constructable<T>): T;
    /**
     * Will be true if the request this response references was a success and no errors were found.
     * Responses containing warnings will always be treated as being successfully.
     */
    readonly success: boolean;
    /**
     * An array with all error messages received from the server.
     */
    readonly errors: string[];
    /**
     * Shorthand for extracting the dialog's id from the HNHBK segment.
     * If no HNHBK segment was found, an error will be thrown.
     */
    readonly dialogId: string;
    /**
     * Shorthand for retrieving the bank's name from the HIBPA segment.
     * Will return `undefined` if no HIBPA segment was found.
     */
    readonly bankName: string;
    /**
     * Shorthand for extracting the system's id from the HISYN segment.
     * If no HISYN segment was found, an error will be thrown.
     */
    readonly systemId: string;
    /**
     * Will return a set of return values from either only HIRMG or HIRMS segments or both.
     * A return value is a set of a return code identifying it as well as a human readable message.
     *
     * @param segmentClasses Either HIRMG, HIRMS or both. Denotes which segment's return values should be processed.
     *
     * @return A map of (code -> return value).
     */
    returnValues(...segmentClasses: (Constructable<HIRMG | HIRMS>)[]): Map<number, ReturnValue>;
    /**
     * Will assemble a list of all supported TAN methods.
     */
    readonly supportedTanMethods: TanMethod[];
    /**
     * Will assemble a list of all supported SEPA pain-message formats.
     */
    readonly painFormats: string[];
    /**
     * Segments can reference each other.
     * Will find the segment of the specified class referencing the specified segment.
     *
     * @param segmentClass Ignore all sections except for segments of this type.
     * @param segment Find the segment in the current message that references the segment specified in this parameter.
     *
     * @return All segments of the specified type that reference the provided segment. Might be an empty array.
     */
    findSegmentForReference<T extends Segment<any>>(segmentClass: Constructable<T>, segment: Segment<any>): T;
    /**
     * Returns touchdowns contained in this message. Touchdowns are used for listing statements if the statement list
     * needed to be split into multiple requests.
     * The touchdowns are used for identifying from what request the list of statement was continued in this response.
     *
     * @param request The request for which the touchdown should be found.
     *
     * @return A map of (segment type -> touchdown identifier).
     */
    getTouchdowns(request: Request): Map<string, string>;
    /**
     * Will return the maximum version for the specified segment type in this message.
     *
     * @param segment The class of segments for which the maximum version should be found.
     *
     * @return The maximum version of the specified segment class version, or `0` if no segment was found.
     */
    segmentMaxVersion(segment: Constructable<Segment<any>>): number;
    /**
     * Generate a textual representation for debug purposes.
     */
    readonly debugString: string;
}
