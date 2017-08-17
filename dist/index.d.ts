import { SemVer } from 'semver';
export declare class SmartVersion {
    semver: SemVer;
    update: {
        patch: () => void;
        minor: () => void;
        major: () => void;
    };
    constructor(semVerStringArg: string);
    readonly major: number;
    readonly minor: number;
    readonly patch: number;
}
