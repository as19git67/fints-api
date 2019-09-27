export declare class HISALSProps {
    segNo: number;
    maxRequestCount: number;
    minSignatures: number;
}
declare const HISALS_base: import("..").Constructable<HISALSProps & import("./segment").Segment<HISALSProps>>;
/**
 * HISALS (Saldenabfrage Parameter)
 * Section C.2.1.2
 */
export declare class HISALS extends HISALS_base {
    type: string;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
}
export {};
