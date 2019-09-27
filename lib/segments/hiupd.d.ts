import { SEPAAccountHiupd } from "../types";
export declare class HIUPDProps {
    segNo: number;
    account: SEPAAccountHiupd;
}
declare const HIUPD_base: import("../types").Constructable<HIUPDProps & import("./segment").Segment<HIUPDProps>>;
/**
 * HISPA (SEPA-Kontoverbindung rückmelden)
 * Section C.10.1.3
 */
export declare class HIUPD extends HIUPD_base {
    type: string;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
}
export {};
