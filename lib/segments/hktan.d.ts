export declare class HKTANProps {
    segNo: number;
    version: number;
    process: string;
    aref: string;
    medium: string;
}
declare const HKTAN_base: import("..").Constructable<HKTANProps & import("./segment").Segment<HKTANProps>>;
/**
 * HKTAN (TAN-Verfahren festlegen)
 * Section B.5.1
 */
export declare class HKTAN extends HKTAN_base {
    type: string;
    protected deserialize(): void;
    protected serialize(): string[];
}
export {};
