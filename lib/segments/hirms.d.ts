import { ReturnValue } from "../return-value";
export declare class HIRMSProps {
    segNo: number;
    returnValues: Map<string, ReturnValue>;
}
declare const HIRMS_base: import("..").Constructable<HIRMSProps & import("./segment").Segment<HIRMSProps>>;
/**
 * HIRMS (Rückmeldungen zu Segmenten)
 * Section B.7.3
 */
export declare class HIRMS extends HIRMS_base {
    type: string;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
}
export {};
