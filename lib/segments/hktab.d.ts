export declare class HKTABProps {
    segNo: number;
    tanClass: string;
    mode: number;
}
declare const HKTAB_base: import("..").Constructable<HKTABProps & import("./segment").Segment<HKTABProps>>;
/**
 * HKTAB (Verfügbare TAN-Medien ermitteln)
 * Section C.2.1.2
 */
export declare class HKTAB extends HKTAB_base {
    type: string;
    protected defaults(): void;
    protected serialize(): string[];
    protected deserialize(): void;
}
export {};
