import { Constructable } from "../types";
/**
 * Properties passed to a segment.
 * These properties will be used to serialize a segment and are generated when
 * deserializing it.
 */
export interface SegmentProps {
    segNo: number;
}
/**
 * A segment of a message.
 * Each message sent to the server or received from it will consist of multiple segments.
 * Each segment itself is versionized and has a segment type.
 * Segments within a message are numbered.
 */
export declare abstract class Segment<TProps extends SegmentProps> {
    /**
     * This segment's type.
     */
    abstract type: string;
    /**
     * The version of this segment.
     */
    version: number;
    /**
     * The segments are numbered within a message.
     * This represents the segment's message.
     */
    segNo: number;
    /**
     * Segments can reference other segments.
     * This is the referenced segment's number.
     */
    reference?: number;
    constructor(arg: string | string[][] | TProps);
    /**
     * Serialize this segment into an array of data groups (which is an array of data elements).
     */
    protected abstract serialize(): (string | string[])[];
    /**
     * Deerialize a segment from an array of data groups (which is an array of data elements).
     */
    protected abstract deserialize(input: string[][]): void;
    /**
     * Segments can override this function to provide defaults for their properties.
     */
    protected defaults(): void;
    /**
     * Serialize the segment into a string that can be used for serializing a request.
     */
    toString(): string;
    /**
     * Generate a textual representation for debug purposes.
     */
    readonly debugString: string | string[];
}
/**
 * Create a base class for segments, inheriting from `Segment` and the segment's props.
 */
export declare function SegmentClass<TProps extends SegmentProps>(propsClass: Constructable<TProps>): Constructable<TProps & Segment<TProps>>;
