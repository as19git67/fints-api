/**
 * Base 64 encode a string for use with fints. Fints uses ISO-8859-1 encoding which will be the encoding used
 * in the base 64 data.
 *
 * @param input The string to encode.
 *
 * @return The encoded string.
 */
export declare function encodeBase64(input: string): string;
/**
 * Decode a base 64 encoded string received from a fints server.
 * Fints uses ISO-8859-1 encoding which will be converted into UTF-8.
 *
 * @param input The string to decode.
 *
 * @return The decoded string.
 */
export declare function decodeBase64(input: string): string;
/**
 * Parse a full fints message into a set of segments containing a set of data groups containing a set of
 * data elements.
 * Can be parsed further by using segment classes.
 * Bit strings with length will be resolved here.
 *
 * @param input The string to parse.
 *
 * @return Set of segments.
 */
export declare function parse(input: string): string[][][];
/**
 * Fill up the string with the specified character from the left.
 *
 * @param str String to pad.
 * @param count Limit to which the string should be padded.
 * @param character Character to pad the string with. Defaults to "0".
 *
 * @return The padded string.
 */
export declare function leftPad(str: string, count: number, character?: string): string;
/**
 * Escape a string into fints representation.
 *
 * @param content The string to escape.
 *
 * @return The escaped string.
 */
export declare function escapeFinTS(content: string): string;
/**
 * Unescape a string from fints representation.
 *
 * @param content The string to unescape.
 *
 * @return The unescaped string.
 */
export declare function unescapeFinTS(content: string): string;
