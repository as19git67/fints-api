export declare class HKVVBProps {
    segNo: number;
    lang?: number;
    protected productId: string;
}
declare const HKVVB_base: import("..").Constructable<HKVVBProps & import("./segment").Segment<HKVVBProps>>;
/**
 * HKVVB (Verarbeitungsvorbereitung)
 * Section C.3.1.3
 */
export declare class HKVVB extends HKVVB_base {
    type: string;
    protected defaults(): void;
    protected serialize(): string[];
    protected deserialize(): void;
}
export {};
