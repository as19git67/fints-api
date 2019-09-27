export declare class HIKAZSProps {
    segNo: number;
    maxRequestCount: number;
    minSignatures: number;
}
declare const HIKAZS_base: import("..").Constructable<HIKAZSProps & import("./segment").Segment<HIKAZSProps>>;
/**
 * HIKAZS (Kontoumsätze/Zeitraum Parameter)
 * Section C.2.1.1.1.1
 */
export declare class HIKAZS extends HIKAZS_base {
    type: string;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
}
export {};
