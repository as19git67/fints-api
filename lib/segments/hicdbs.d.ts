export declare class HICDBSProps {
    segNo: number;
    maxRequestCount: number;
    minSignatures: number;
}
declare const HICDBS_base: import("..").Constructable<HICDBSProps & import("./segment").Segment<HICDBSProps>>;
/**
 * HICDBS (SEPA-Dauerauftragsbestand Parameter)
 * Section C.10.2.3.4
 */
export declare class HICDBS extends HICDBS_base {
    type: string;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
}
export {};
