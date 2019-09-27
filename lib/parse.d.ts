/**
 * A set of utilities for parsing data from the fints data formats.
 */
export declare const Parse: {
    /**
     * Parse a boolean (JN).
     *
     * @param str The string to parse.
     *
     * @return The parsed boolean.
     */
    bool(str: string): boolean;
    /**
     * Parse a number.
     *
     * @param str The string to parse.
     *
     * @return The parsed number.
     */
    num(str: string): number;
    /**
     * Parse a set of digits.
     *
     * @param str The string to parse.
     *
     * @return The parsed number.
     */
    dig(str: string): number;
    /**
     * Parse a date.
     *
     * @param str The string or date to parse.
     *
     * @return The parsed date.
     */
    date(str: string | Date): Date;
    /**
     * Parse a xml document to an object.
     *
     * @param str The xml parse.
     *
     * @return The parsed object.
     */
    xml(str: string): unknown;
};
