import { SemVer } from 'semver';
export declare class SmartVersion {
    semver: SemVer;
    versionString: string;
    update: {
        patch: () => void;
        minor: () => void;
        major: () => void;
    };
    constructor(semVerStringArg: string);
    readonly major: number;
    readonly minor: number;
    readonly patch: number;
    greaterThan(smartVersionArg: SmartVersion): boolean;
    /**
     * compares the version of this against a string
     */
    greaterThanString(versionStringArg: any): boolean;
    lessThan(smartVersionArg: SmartVersion): boolean;
    /**
     * compares the version of this against a string
     */
    lessThanString(versionStringArg: any): boolean;
}
