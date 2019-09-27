/**
 * Wraps a return value used in the HIRMG and HIRMS segments.
 */
export declare class ReturnValue {
    /**
     * The return value's code.
     * Identifies the purpose of the return value and also specifies whether it's a notification of succes,
     * a warning or an error.
     */
    code: string;
    /**
     * A human readable message.
     */
    message: string;
    /**
     * Arbitrary parameters.
     */
    parameters: string[];
    /**
     * A return value might reference a set of certain segments of a referenced request, for example if it
     * was a warning or an error in a HIRMS segment.
     */
    references: number[];
    constructor(props: Partial<ReturnValue>);
    /**
     * Will be `true` if the return value was a successful one (code starts with "0").
     */
    readonly success: boolean;
    /**
     * Will be `true` if the return value was warning (code starts with "3").
     */
    readonly warning: boolean;
    /**
     * Will be `true` if the return value was an error (code starts with "9").
     */
    readonly error: boolean;
}
