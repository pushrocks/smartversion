import * as plugins from './smartversion.plugins';

export class SmartVersion {
  public static fromFuzzyString(fuzzyString): SmartVersion {
    return new SmartVersion(plugins.semver.minVersion(fuzzyString).version, fuzzyString);
  }

  public originalVersionString: string;
  public semver: plugins.semver.SemVer;
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

  constructor(semVerStringArg: string, originalStringArg?: string) {
    this.originalVersionString = originalStringArg;
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

  /**
   * tries to get the best match from a range of available versions
   */
  public getBestMatch(availableVersions: string[]): string {
    let bestMatchingVersion: string;
    for (const versionArg of availableVersions) {
      if (!plugins.semver.satisfies(versionArg, this.originalVersionString)) {
        continue;
      }
      if(!bestMatchingVersion) {
        bestMatchingVersion = versionArg;
      } else {
        if (plugins.semver.lt(bestMatchingVersion, versionArg)) {
          bestMatchingVersion = versionArg;
        }
      }
    }
    return bestMatchingVersion;
  }
}
