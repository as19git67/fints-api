import { Format } from "../format";
import { SegmentClass } from "./segment";
import { SEPAAccount } from "../types";
import { COUNTRY_CODE } from "../constants";

export class HKKAZProps {
  public segNo: number;
  public version: number;
  public account: SEPAAccount;
  public startDate: Date;
  public endDate: Date;
  public touchdown: string;
}

/**
 * DKKKU (Kreditkartenumsätze)
 * Section XXX?
 */
export class DKKKU extends SegmentClass(HKKAZProps) {
  public type = "DKKKU";

  protected serialize() {
    const { version, account, endDate, startDate, touchdown } = this;
    const { iban, bic, accountNumber, subAccount, blz } = account;
    if (![4, 5, 6, 7].includes(version)) {
      throw new Error(`Unsupported DKKKU version ${version}.`);
    }
    const serializedAccount = version === 7 ?
        [iban, bic, accountNumber, subAccount, String(COUNTRY_CODE), blz] :
        [accountNumber, subAccount, String(COUNTRY_CODE), blz];
    return [
      serializedAccount,
      Format.jn(false),
      Format.date(startDate),
      Format.date(endDate),
      Format.empty(),
      Format.stringEscaped(touchdown),
    ];
  }

  protected deserialize() { throw new Error("Not implemented."); }
}
