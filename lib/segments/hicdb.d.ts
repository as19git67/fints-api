import { StandingOrder } from "../types";
export declare class HICDBProps {
    segNo: number;
    standingOrder: StandingOrder;
}
declare const HICDB_base: import("../types").Constructable<HICDBProps & import("./segment").Segment<HICDBProps>>;
/**
 * HICDB (SEPA-Dauerauftragsbestand rückmelden)
 * Section C.10.2.3.4
 */
export declare class HICDB extends HICDB_base {
    type: string;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
    private isDocument;
}
export {};
