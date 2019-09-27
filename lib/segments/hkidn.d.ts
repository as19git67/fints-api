export declare class HKIDNProps {
    blz: string;
    name: string;
    systemId?: string;
    customerId?: number;
    segNo: number;
}
declare const HKIDN_base: import("..").Constructable<HKIDNProps & import("./segment").Segment<HKIDNProps>>;
/**
 * HKIDN (Identifikation)
 * Section C.3.1.2
 */
export declare class HKIDN extends HKIDN_base {
    type: string;
    protected defaults(): void;
    protected serialize(): (string | string[])[];
    protected deserialize(): void;
}
export {};
