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
}
exports.SmartVersion = SmartVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUFpRDtBQUlqRDtJQWNFLFlBQWEsZUFBdUI7UUFacEMsV0FBTSxHQUFHO1lBQ1AsS0FBSyxFQUFFO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUMzQyxDQUFDO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUMzQyxDQUFDO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUMzQyxDQUFDO1NBQ0YsQ0FBQTtRQUdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO0lBQzFCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7SUFDMUIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtJQUMxQixDQUFDO0NBRUY7QUE5QkQsb0NBOEJDIn0=