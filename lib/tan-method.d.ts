export declare const tanMethodArgumentMap: Map<number, string[]>;
export declare class TanMethod {
    allowedFormat?: string;
    cancellable?: boolean;
    challengeClassRequired?: boolean;
    challengeValueRequired?: boolean;
    challengeStructured?: boolean;
    descriptionRequired?: string;
    hhdUcRequired?: boolean;
    initializationMode?: string;
    maxLengthInput?: number;
    maxLengthReturnvalue?: number;
    multiple?: boolean;
    name?: string;
    numberOfSupportedLists?: number;
    principalAccountRequired?: boolean;
    securityFunction?: string;
    smsChargeAccountRequired?: boolean;
    supportedMediaNumber?: number;
    tanListNumberRequired?: boolean;
    tanProcess?: string;
    tanTimeDialogAssociation?: string;
    techId?: string;
    textReturnvalue?: string;
    zkaId?: string;
    zkaVersion?: string;
    version?: number;
    constructor(version: number, config?: string[]);
}
