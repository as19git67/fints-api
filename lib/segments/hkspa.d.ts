export declare class HKSPAProps {
    blz?: string;
    subAccFeature?: string;
    accNo?: number;
    segNo: number;
}
declare const HKSPA_base: import("..").Constructable<HKSPAProps & import("./segment").Segment<HKSPAProps>>;
/**
 * HKSPA (SEPA-Kontoverbindung anfordern)
 * Section C.10.1.3
 */
export declare class HKSPA extends HKSPA_base {
    type: string;
    protected defaults(): void;
    protected serialize(): string[];
    protected deserialize(): void;
}
export {};
