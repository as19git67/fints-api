import { SEPAAccount } from "../types";
export declare class HKKAZProps {
    segNo: number;
    version: number;
    account: SEPAAccount;
    startDate: Date;
    endDate: Date;
    touchdown: string;
}
declare const HKKAZ_base: import("../types").Constructable<HKKAZProps & import("./segment").Segment<HKKAZProps>>;
/**
 * HKKAZ (Kontoumsätze)
 * Section C.2.1.1.1.2
 */
export declare class HKKAZ extends HKKAZ_base {
    type: string;
    protected serialize(): (string | string[])[];
    protected deserialize(): void;
}
export {};
