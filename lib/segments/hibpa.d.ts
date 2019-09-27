export declare class HIBPAProps {
    segNo: number;
    bpdVersion: number;
    countryCode: number;
    blz: string;
    bankName: string;
    transactionTypeCount: number;
    supportedLanguages: number[];
    supportedHbciVersions: number[];
}
declare const HIBPA_base: import("..").Constructable<HIBPAProps & import("./segment").Segment<HIBPAProps>>;
/**
 * HIBPA (Bankparameter allgemein)
 * Section D.2
 */
export declare class HIBPA extends HIBPA_base {
    type: string;
    protected defaults(): void;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
}
export {};
