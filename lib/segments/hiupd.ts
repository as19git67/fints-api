import {SegmentClass} from "./segment";
import {SEPAAccountHiupd} from "../types";

export class HIUPDProps {
  public segNo: number;
  public account: SEPAAccountHiupd;
}

/**
 * HISPA (SEPA-Kontoverbindung rückmelden)
 * Section C.10.1.3
 */
export class HIUPD extends SegmentClass(HIUPDProps) {
  public type = "HIUPD";

  protected serialize(): string[][] {
    throw new Error("Not implemented.");
  }

  protected deserialize(input: string[][]) {
    const [[accountNumber, subAccount, a, blz], [iban], [clientId], [accountType], [accountCurrency], [accountOwnerName1], [accountOwnerName2], [accountName], [limitType, limitValue, limitCurrency], ...parameters] = input;

    // extract all supported transaction types (Geschäftsvorfälle)
    let transactionTypes: string[] = [];
    parameters.forEach(seg => {
      if (seg.length > 0 && seg[0]) {
        transactionTypes.push(seg[0]);
      }
    });

    this.account = {accountNumber, iban, accountOwnerName1, accountName, limitValue, transactionTypes}
  }
}
