import {SegmentClass} from "./segment";
import {Parse} from "../parse";

export class DIKKUProps {
  public segNo: number;
  public accountNumber: string;
  public balanceData: any;
  public transactions: any;
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
    const [accountNumber, , balanceData, , , transactions] = input;
    this.transactions = transactions;
    this.accountNumber = accountNumber[0];
    this.balanceData = balanceData;
  }
}
