import {SegmentClass} from "./segment";
import {Parse} from "../parse";

export class DIKKUProps {
  public segNo: number;
  public accountNumber: string;
  public balanceData: any;
  public transactions: DIKKUTransaction[];
}

export interface DIKKUTransaction {
  accountNumber: string;
  valueDate: string;
  value: number;
  currency: string,
  purpose: string;
  reference: string;
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
    const [accountNumber, , balanceData, , , ...transactions] = input;
    this.transactions = transactions.map(tr => {
      const [an, valueDate, date, unknown1, value2, currency2, debitmark2, unknown2, value1, currency1, debitmark1, ...purp] = tr;
      const [yes, ref] = purp.splice(purp.length - 2, 2);
      let t: DIKKUTransaction = {
        accountNumber: an,
        valueDate: valueDate,
        value: debitmark1 === 'C' ? parseFloat(value1) * -1 : parseFloat(value1),
        purpose: purp.join(' '),
        currency: currency1,
        reference: ref
      };
      return t;
    });
    this.accountNumber = accountNumber[0];
    this.balanceData = balanceData;
  }
}
