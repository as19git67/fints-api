import { Segment } from "./segment";
export declare class HNVSDProps {
    segNo: number;
    /**
     * Only populated by constructor.
     * Deserializing ignores this property.
     */
    segments: Segment<any>[];
    /**
     * Populated when deserializing.
     */
    rawSegments: string[][][];
}
declare const HNVSD_base: import("..").Constructable<HNVSDProps & Segment<HNVSDProps>>;
/**
 * HNVSD (Verschlüsselte Daten)
 * Section B.5.4
 */
export declare class HNVSD extends HNVSD_base {
    type: string;
    protected defaults(): void;
    protected serialize(): string[];
    protected deserialize(input: string[][]): void;
}
export {};
