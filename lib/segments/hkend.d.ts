export declare class HKENDProps {
    segNo: number;
    dialogId: string;
}
declare const HKEND_base: import("..").Constructable<HKENDProps & import("./segment").Segment<HKENDProps>>;
export declare class HKEND extends HKEND_base {
    type: string;
    protected defaults(): void;
    protected serialize(): string[];
    protected deserialize(): void;
}
export {};
