import { ReturnValue } from "../return-value";
export declare class HIRMGProps {
    segNo: number;
    returnValues: Map<string, ReturnValue>;
}
declare const HIRMG_base: import("..").Constructable<HIRMGProps & import("./segment").Segment<HIRMGProps>>;
/**
 * HIRMG (Rückmeldungen zur Gesamtnachricht)
 * Section B.7.2
 */
export declare class HIRMG extends HIRMG_base {
    type: string;
    protected defaults(): void;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
}
export {};
