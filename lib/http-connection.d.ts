import "isomorphic-fetch";
import { Request } from "./request";
import { Response } from "./response";
import { Connection } from "./types";
/**
 * Configuration specifying how to reach the fints server.
 */
export declare class ConnectionConfig {
    /**
     * The URL to reach the server at.
     */
    url: string;
    /**
     * If set to `true`, will log all requests performed and responses received.
     */
    debug: boolean;
}
/**
 * A connection used by clients to reach the fints server.
 */
export declare class HttpConnection extends ConnectionConfig implements Connection {
    constructor(config: ConnectionConfig);
    send(request: Request): Promise<Response>;
}
