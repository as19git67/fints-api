import "isomorphic-fetch";
import { Dialog } from "./dialog";
import { Segment } from "./segments";
import { Request } from "./request";
import { SEPAAccount, Statement, Balance, StandingOrder } from "./types";
/**
 * An abstract class for communicating with a fints server.
 * For a common implementation look at `PinTanClient`.
 */
export declare abstract class Client {
    /**
     * Create a new dialog.
     */
    protected abstract createDialog(): Dialog;
    /**
     * Create a request.
     */
    protected abstract createRequest(dialog: Dialog, segments: Segment<any>[], tan?: string): Request;
    /**
     * Fetch a list of all SEPA accounts accessible by the user.
     *
     * @return An array of all SEPA accounts.
     */
    accounts(): Promise<SEPAAccount[]>;
    /**
     * Fetch the balance for a SEPA account.
     *
     * @param account The SEPA account to fetch the balance for.
     *
     * @return The balance of the given SEPA account.
     */
    balance(account: SEPAAccount): Promise<Balance>;
    /**
     * Fetch a list of bank statements deserialized from the MT940 transmitted by the fints server.
     *
     * @param startDate The start of the range for which the statements should be fetched.
     * @param endDate The end of the range for which the statements should be fetched.
     *
     * @return A list of all statements in the specified range.
     */
    statements(account: SEPAAccount, startDate: Date, endDate: Date): Promise<Statement[]>;
    /**
     * Fetch a list of standing orders for the given account.
     *
     * @param account The account to fetch standing orders for.
     *
     * @return A list of all standing orders for the given account.
     */
    standingOrders(account: SEPAAccount): Promise<StandingOrder[]>;
}
