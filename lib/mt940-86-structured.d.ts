import { Section, PaymentReference, StructuredDescription } from "./types";
/**
 * Used to sniff whether the 86 section of the MT940 statement list supports the fints structured
 * representation.
 *
 * @param input The string for the 86 section.
 *
 * @return Whether the string is likely structured.
 */
export declare function is86Structured(input: string): boolean;
/**
 * Parses a commonly used date format ("DATUM 15.11.2018, 12:00 UHR") into a date
 *
 * @param content The date string to parse.
 *
 * @return The parsed date.
 */
export declare function parsePaymentReferenceDate(content: string): Date;
/**
 * Parses a commonly format for representing a TAN related to a transaction ("1. TAN 123456").
 *
 * @param content The string to parse.
 *
 * @return The parsed TAN number and TAN iteself.
 */
export declare function parsePaymentReferenceTan(content: string): {
    num: number;
    value: string;
};
/**
 * If the payment reference follows the SEPA tagging system, parse the information.
 * See: https://tinyurl.com/ycdfx5hd
 *
 * @param references A list of all sections used for payment reference (20 - 29 and 60 - 63).
 *
 * @return A parsed payment reference with all extracted data.
 */
export declare function assemblePaymentReference(references: Section[]): PaymentReference;
/**
 * Parse as much information as possible from the structured 86 section of a MT940 statement list.
 * Use `is86Structured` to sniff whether the payment reference is parsable.
 *
 * @param input The input string for the 86 section to parse.
 *
 * @return The parsed structured description.
 */
export declare function parse86Structured(input: string): StructuredDescription;
