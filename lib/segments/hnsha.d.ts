export declare class HNSHAProps {
    segNo: number;
    secRef: number;
    pin: string;
    tan: string;
}
declare const HNSHA_base: import("..").Constructable<HNSHAProps & import("./segment").Segment<HNSHAProps>>;
/**
 * HNSHA (Signaturabschluss)
 * Section B.5.2
 */
export declare class HNSHA extends HNSHA_base {
    type: string;
    protected defaults(): void;
    protected serialize(): (string | string[])[];
    protected deserialize(): void;
}
export {};
