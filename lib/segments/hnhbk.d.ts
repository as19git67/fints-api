export declare class HNHBKProps {
    msgLength: number;
    dialogId: string;
    msgNo: number;
    segNo: number;
    refMsg?: {
        msgNo: number;
        dialogId: string;
    };
}
declare const HNHBK_base: import("..").Constructable<HNHBKProps & import("./segment").Segment<HNHBKProps>>;
/**
 * HNHBK (Nachrichtenkopf)
 * Section B.5.2
 */
export declare class HNHBK extends HNHBK_base {
    type: string;
    protected defaults(): void;
    protected serialize(): (string | string[])[];
    protected deserialize(input: string[][]): void;
}
export {};
