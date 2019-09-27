export declare class HNSHKProps {
    segNo: number;
    secRef: number;
    blz: string;
    name: string;
    systemId: string;
    profileVersion: number;
    securityFunction?: string;
}
declare const HNSHK_base: import("..").Constructable<HNSHKProps & import("./segment").Segment<HNSHKProps>>;
/**
 * HNSHK (Signaturkopf)
 * Section B.5.1
 */
export declare class HNSHK extends HNSHK_base {
    type: string;
    protected defaults(): void;
    protected serialize(): (string | string[])[];
    protected deserialize(): void;
}
export {};
