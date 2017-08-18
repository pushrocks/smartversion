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
    greaterThan(smartVersionArg) {
        return this.greaterThanString(smartVersionArg.versionString);
    }
    /**
     * compares the version of this against a string
     */
    greaterThanString(versionStringArg) {
        return plugins.semver.gt(this.versionString, versionStringArg);
    }
    lessThan(smartVersionArg) {
        return this.lessThanString(smartVersionArg.versionString);
    }
    /**
     * compares the version of this against a string
     */
    lessThanString(versionStringArg) {
        return plugins.semver.lt(this.versionString, versionStringArg);
    }
}
exports.SmartVersion = SmartVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUFpRDtBQUlqRDtJQWVFLFlBQWEsZUFBdUI7UUFacEMsV0FBTSxHQUFHO1lBQ1AsS0FBSyxFQUFFO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUMzQyxDQUFDO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUMzQyxDQUFDO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUMzQyxDQUFDO1NBQ0YsQ0FBQTtRQUdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFBO0lBQzFDLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7SUFDMUIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtJQUMxQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO0lBQzFCLENBQUM7SUFFRCxXQUFXLENBQUUsZUFBNkI7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUJBQWlCLENBQUUsZ0JBQWdCO1FBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUVELFFBQVEsQ0FBRSxlQUE2QjtRQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYyxDQUFFLGdCQUFnQjtRQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ2hFLENBQUM7Q0FFRjtBQXRERCxvQ0FzREMifQ==