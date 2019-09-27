import { SEPAAccount } from "../types";
export declare class HISALProps {
    segNo: number;
    account: SEPAAccount;
    productName: string;
    currency: string;
    bookedBalance: number;
    pendingBalance: number;
    creditLimit: number;
    availableBalance: number;
}
declare const HISAL_base: import("../types").Constructable<HISALProps & import("./segment").Segment<HISALProps>>;
/**
 * HISAL (Saldenrückmeldung)
 * Section C.2.1.2.2
 */
export declare class HISAL extends HISAL_base {
    type: string;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
}
export {};
