import * as plugins from './smartversion.plugins'

import { SemVer } from 'semver'

export class SmartVersion {
  semver: SemVer
  versionString: string
  update = {
    patch: () => {
      this.semver.patch = this.semver.patch + 1
    },
    minor: () => {
      this.semver.minor = this.semver.minor + 1
    },
    major: () => {
      this.semver.major = this.semver.major + 1
    }
  }

  constructor (semVerStringArg: string) {
    this.semver = new plugins.semver.SemVer(semVerStringArg)
    this.versionString = this.semver.version
  }

  get major () {
    return this.semver.major
  }

  get minor () {
    return this.semver.minor
  }

  get patch () {
    return this.semver.patch
  }

  greaterThan (smartVersionArg: SmartVersion) {
    return this.greaterThanString(smartVersionArg.versionString)
  }

  /**
   * compares the version of this against a string
   */
  greaterThanString (versionStringArg) {
    return plugins.semver.gt(this.versionString, versionStringArg)
  }

  lessThan (smartVersionArg: SmartVersion) {
    return this.lessThanString(smartVersionArg.versionString)
  }

  /**
   * compares the version of this against a string
   */
  lessThanString (versionStringArg) {
    return plugins.semver.lt(this.versionString, versionStringArg)
  }

}
