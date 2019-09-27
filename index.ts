import { Client } from "./lib/client";
import { Dialog } from "./lib/dialog";
import { Request } from "./lib/request";
import { HttpConnection } from "./lib/http-connection";
import { Segment } from "./lib/segments";
import { Connection } from "./lib/types";

/**
 * Set of options needed to construct a `PinTanClient`.
 */
export interface PinTanClientConfig {
  /**
   * The fints product identification.
   */
  productId: string;
  /**
   * The banks identification number (Bankleitzahl).
   */
  blz: string;
  /**
   * The username or identification number.
   */
  name: string;
  /**
   * The pin code or password used for authenticating with the fints server.
   */
  pin: string;
  /**
   * The URL to reach the server at.
   */
  url: string;
  /**
   * If set to `true`, will log all requests performed and responses received.
   */
  debug?: boolean;
}

export class PinTanClient extends Client {
  /**
   * Connection used to reach the server.
   */
  private connection: Connection;
  /**
   * Configuration for connecting and authenticating.
   */
  protected config: PinTanClientConfig;

  constructor(config: PinTanClientConfig) {
    super();
    this.config = config;
    const { url, debug  } = config;
    this.connection = new HttpConnection({ url, debug });
  }

  public createDialog() {
    const { blz, name, pin, productId } = this.config;
    const { connection } = this;
    return new Dialog({ blz, name, pin, systemId: "0", productId: productId, connection });
  }

  public createRequest(dialog: Dialog, segments: Segment<any>[], tan?: string) {
    const { blz, name, pin } = this.config;
    const { systemId, dialogId, msgNo, tanMethods } = dialog;
    return new Request({ blz, name, pin, systemId, dialogId, msgNo, segments, tanMethods, tan });
  }
}
