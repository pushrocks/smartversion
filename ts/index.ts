import * as plugins from './smartversion.plugins'

import { SemVer } from 'semver'

export class SmartVersion {
  semver: SemVer
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

}
