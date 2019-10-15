import { SegmentClass } from "./segment";
import { Parse } from "../parse";

export class DIKKUSProps {
    public segNo: number;
    public maxRequestCount: number;
    public minSignatures: number;
}

/**
 * DIKKUS (Kreditkartenumsätze/Zeitraum Parameter)
 */
export class DIKKUS extends SegmentClass(DIKKUSProps) {
    public type = "DIKKUS";

    protected serialize(): string[][] { throw new Error("Not implemented."); }

    protected deserialize(input: string[][]) {
        const [ [ maxRequestCount ], [ minSignatures ] ] = input;
        this.minSignatures = Parse.num(minSignatures);
        this.maxRequestCount = Parse.num(maxRequestCount);
    }
}
