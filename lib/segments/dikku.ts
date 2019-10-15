import {SegmentClass} from "./segment";
import {Parse} from "../parse";

export class DIKKUProps {
  public segNo: number;
  public bookedTransactions: string;
  public pendingTransactions: string;
}

/**
 * DIKKU (Kreditkartenumsätze)
 */
export class DIKKU extends SegmentClass(DIKKUProps) {
  public type = "DIKKU";

  protected serialize(): string[][] {
    throw new Error("Not implemented.");
  }

  protected deserialize(input: string[][]) {
    const [bookedTransactions, pendingTransactions] = input;
    if (pendingTransactions && pendingTransactions[0]) {
      this.pendingTransactions = pendingTransactions[0];
    }
    if (bookedTransactions && bookedTransactions[0]) {
      this.bookedTransactions = bookedTransactions[0];
    }
  }
}
