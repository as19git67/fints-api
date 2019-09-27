import { SEPAAccount } from "../types";
export declare class HKCDBProps {
    segNo: number;
    version: number;
    account: SEPAAccount;
    painFormats: string[];
    touchdown: string;
}
declare const HKCDB_base: import("../types").Constructable<HKCDBProps & import("./segment").Segment<HKCDBProps>>;
/**
 * HKCDB (SEPA-Dauerauftragsbestand abrufen)
 * Section C.10.2.3.4
 */
export declare class HKCDB extends HKCDB_base {
    type: string;
    protected serialize(): (string | string[])[];
    protected deserialize(): void;
}
export {};
