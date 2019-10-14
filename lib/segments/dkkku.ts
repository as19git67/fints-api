import {Format} from "../format";
import {SegmentClass} from "./segment";
import {SEPAAccount} from "../types";
import {COUNTRY_CODE} from "../constants";

export class DKKKUProps {
  public segNo: number;
  public version: number;
  public account: SEPAAccount;
  public startDate: Date;
}

/**
 * DKKKU (Kreditkartenumsätze)
 */
export class DKKKU extends SegmentClass(DKKKUProps) {
  public type = "DKKKU";

  protected serialize() {
    const {version, account, startDate} = this;
    const {accountNumber, subAccount, blz} = account;
    if (![2].includes(version)) {
      throw new Error(`Unsupported DKKKU version ${version}.`);
    }
    const serializedAccount = [accountNumber, subAccount, String(COUNTRY_CODE), blz];
    return [serializedAccount, accountNumber, subAccount, Format.date(startDate)];
  }

  protected deserialize() {
    throw new Error("Not implemented.");
  }
}
