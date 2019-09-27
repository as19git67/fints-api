export declare class HKSYNProps {
    segNo: number;
    mode?: number;
}
declare const HKSYN_base: import("..").Constructable<HKSYNProps & import("./segment").Segment<HKSYNProps>>;
/**
 * HKSYN (Synchronisation)
 * Section C.8.1.2
 */
export declare class HKSYN extends HKSYN_base {
    type: string;
    protected defaults(): void;
    protected serialize(): string[];
    protected deserialize(): void;
}
export {};
