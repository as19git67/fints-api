import { SEPAAccount } from "../types";
export declare class HKSALProps {
    segNo: number;
    version: number;
    account: SEPAAccount;
    touchdown: string;
}
declare const HKSAL_base: import("../types").Constructable<HKSALProps & import("./segment").Segment<HKSALProps>>;
/**
 * HKSAL (Saldenabfrage)
 * Section C.2.1.2.2
 */
export declare class HKSAL extends HKSAL_base {
    type: string;
    protected serialize(): (string | string[])[];
    protected deserialize(): void;
}
export {};
