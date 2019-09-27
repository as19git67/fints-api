export declare class HIKAZProps {
    segNo: number;
    bookedTransactions: string;
    pendingTransactions: string;
}
declare const HIKAZ_base: import("..").Constructable<HIKAZProps & import("./segment").Segment<HIKAZProps>>;
/**
 * HIKAZ (Kontoumsätze rückmelden/Zeitraum)
 * Section C.2.1.1.1.1
 */
export declare class HIKAZ extends HIKAZ_base {
    type: string;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
}
export {};
