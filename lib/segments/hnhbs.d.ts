export declare class HNHBSProps {
    segNo: number;
    msgNo: number;
}
declare const HNHBS_base: import("..").Constructable<HNHBSProps & import("./segment").Segment<HNHBSProps>>;
/**
 * HNHBS (Nachrichtenabschluss)
 * Section B.5.3
 */
export declare class HNHBS extends HNHBS_base {
    type: string;
    protected defaults(): void;
    protected serialize(): string[];
    protected deserialize(): void;
}
export {};
