/**
 * A set of utilities for formatting data into the fints data formats.
 */
export declare const Format: {
    /**
     * Format a date. The time part is ignored.
     *
     * @param date The date to format.
     *
     * @return The formatted string.
     */
    date(date?: Date): string;
    /**
     * Format a binary string with a length specification.
     *
     * @param str The string to format.
     *
     * @return The formatted string.
     */
    stringWithLength(str: string): string;
    /**
     * Format a boolean with no `false` representation.
     *
     * @param value The boolean to format.
     *
     * @return The formatted string.
     */
    bool(value: boolean): "" | "J";
    /**
     * Return the SEPA identification descriptor.
     *
     * @return The SEPA identification descriptor.
     */
    sepaDescriptor(): string;
    /**
     * Format a number.
     *
     * @param num The number to format.
     *
     * @return The formatted string.
     */
    num(num: number): string;
    /**
     * Format a normal string, escaping all control characters.
     *
     * @param str The string to format.
     *
     * @return The formatted string.
     */
    stringEscaped(str: string): string;
    /**
     * Format a set of digits.
     *
     * @param num The number to format.
     *
     * @return The formatted string.
     */
    dig(num: number): string;
    /**
     * Format a time. The date part is ignored.
     *
     * @param date The date to format.
     *
     * @return The formatted string.
     */
    time(date?: Date): string;
    /**
     * Return an empty string.
     *
     * @return An empty string.
     */
    empty(): string;
    /**
     * Format a boolean with an explicit `false` representation (named "JN" in the official documentation).
     *
     * @param boolValue The boolean to format.
     *
     * @return The formatted string.
     */
    jn(boolValue: boolean): "J" | "N";
};
