export declare class HISYNProps {
    segNo: number;
    systemId: string;
}
declare const HISYN_base: import("..").Constructable<HISYNProps & import("./segment").Segment<HISYNProps>>;
/**
 * HISYN (Synchronisierungsantwort)
 * Section C.8.2.2
 */
export declare class HISYN extends HISYN_base {
    type: string;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
}
export {};
