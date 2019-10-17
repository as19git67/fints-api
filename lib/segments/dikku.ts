import {DIKKUTransaction, DIKKUBalance} from "../types";
import {SegmentClass} from "./segment";
import {Parse} from "../parse";

export class DIKKUProps {
  public segNo: number;
  public accountNumber: string;
  public balance: DIKKUBalance;
  public transactions: DIKKUTransaction[];
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
      let value: number = 0.0;
      if (value1) {
        value = parseFloat(value1.replace(new RegExp('\\.', 'g'), '').replace(new RegExp('\\,'), '.'));
      }
      let purpose = purp.join(' ').trim();
      let code: string = purpose.slice(-3);
      let t: DIKKUTransaction = {
        valueDate: valueDate, value: debitmark1 === 'D' ? value * -1 : value, purpose: purpose, currency: currency1, reference: ref
      };
      return t;
    });
    this.accountNumber = accountNumber[0];
    let balanceValue: number = 0.0;
    if (balanceData[1]) {
      balanceValue = parseFloat(balanceData[1].replace(new RegExp('\\.', 'g'), '').replace(new RegExp('\\,'), '.'));
    }
    this.balance = {balanceDate: balanceData[3], value: balanceValue, currency: balanceData[2]};
  }
}
