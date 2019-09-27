export declare class HISPASProps {
    segNo: number;
    painFormats: string[];
}
declare const HISPAS_base: import("..").Constructable<HISPASProps & import("./segment").Segment<HISPASProps>>;
/**
 * HISPAS
 */
export declare class HISPAS extends HISPAS_base {
    type: string;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
}
export {};
