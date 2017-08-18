"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartversion.plugins");
class SmartVersion {
    constructor(semVerStringArg) {
        this.update = {
            patch: () => {
                this.semver.patch = this.semver.patch + 1;
            },
            minor: () => {
                this.semver.minor = this.semver.minor + 1;
            },
            major: () => {
                this.semver.major = this.semver.major + 1;
            }
        };
        this.semver = new plugins.semver.SemVer(semVerStringArg);
        this.versionString = this.semver.version;
    }
    get major() {
        return this.semver.major;
    }
    get minor() {
        return this.semver.minor;
    }
    get patch() {
        return this.semver.patch;
    }
    greaterThanString(versionStringArg) {
        return plugins.semver.gt(this.versionString, versionStringArg);
    }
    lessThanString(versionStringArg) {
        return plugins.semver.lt(this.versionString, versionStringArg);
    }
}
exports.SmartVersion = SmartVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUFpRDtBQUlqRDtJQWVFLFlBQWEsZUFBdUI7UUFacEMsV0FBTSxHQUFHO1lBQ1AsS0FBSyxFQUFFO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUMzQyxDQUFDO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUMzQyxDQUFDO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUMzQyxDQUFDO1NBQ0YsQ0FBQTtRQUdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFBO0lBQzFDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7SUFDMUIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtJQUMxQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO0lBQzFCLENBQUM7SUFFRCxpQkFBaUIsQ0FBRSxnQkFBZ0I7UUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUNoRSxDQUFDO0lBRUQsY0FBYyxDQUFFLGdCQUFnQjtRQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ2hFLENBQUM7Q0FFRjtBQXhDRCxvQ0F3Q0MifQ==