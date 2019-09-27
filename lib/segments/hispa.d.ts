import { SEPAAccount } from "../types";
export declare class HISPAProps {
    segNo: number;
    accounts: SEPAAccount[];
}
declare const HISPA_base: import("../types").Constructable<HISPAProps & import("./segment").Segment<HISPAProps>>;
/**
 * HISPA (SEPA-Kontoverbindung rückmelden)
 * Section C.10.1.3
 */
export declare class HISPA extends HISPA_base {
    type: string;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
}
export {};
