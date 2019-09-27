export declare class HNVSKProps {
    segNo: number;
    blz: string;
    name: string;
    systemId: string;
    profileVersion: number;
}
declare const HNVSK_base: import("..").Constructable<HNVSKProps & import("./segment").Segment<HNVSKProps>>;
export declare class HNVSK extends HNVSK_base {
    type: string;
    protected defaults(): void;
    protected serialize(): (string | string[])[];
    protected deserialize(input: string[][]): void;
}
export {};
