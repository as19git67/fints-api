import { TanMethod } from "../tan-method";
export declare class HITANSProps {
    segNo: number;
    maxRequests: number;
    minSignatures: number;
    securityClass: number;
    securityProfile: number;
    oneStepAllowed: boolean;
    multiple: boolean;
    tanMethods: TanMethod[];
}
declare const HITANS_base: import("..").Constructable<HITANSProps & import("./segment").Segment<HITANSProps>>;
export declare class HITANS extends HITANS_base {
    type: string;
    protected serialize(): string[][];
    protected deserialize(input: string[][]): void;
}
export {};
