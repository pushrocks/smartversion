import * as plugins from './smartversion.plugins';

import { SemVer } from 'semver';

export class SmartVersion {
  public semver: SemVer;
  public versionString: string;
  public update = {
    patch: () => {
      this.semver.patch = this.semver.patch + 1;
    },
    minor: () => {
      this.semver.minor = this.semver.minor + 1;
    },
    major: () => {
      this.semver.major = this.semver.major + 1;
    },
  };

  constructor(semVerStringArg: string) {
    this.semver = new plugins.semver.SemVer(semVerStringArg);
    this.versionString = this.semver.version;
  }

  public get major() {
    return this.semver.major;
  }

  public get minor() {
    return this.semver.minor;
  }

  public get patch() {
    return this.semver.patch;
  }

  public greaterThan(smartVersionArg: SmartVersion) {
    return this.greaterThanString(smartVersionArg.versionString);
  }

  /**
   * compares the version of this against a string
   */
  public greaterThanString(versionStringArg) {
    return plugins.semver.gt(this.versionString, versionStringArg);
  }

  public lessThan(smartVersionArg: SmartVersion) {
    return this.lessThanString(smartVersionArg.versionString);
  }

  /**
   * compares the version of this against a string
   */
  public lessThanString(versionStringArg) {
    return plugins.semver.lt(this.versionString, versionStringArg);
  }
}
