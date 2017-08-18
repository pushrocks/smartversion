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
    greaterThanString(versionStringArg: any): boolean;
    lessThanString(versionStringArg: any): boolean;
}
