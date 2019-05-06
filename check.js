const parentPackage = require('parent-package-json');
const semver = require('semver');

function readParentPackage() {
    const package = parentPackage();
    if (!package) {
        throw new Error('No parent package.json found!');
    }
    
    const packageJSON = package.parse();
    const { npm } = packageJSON.engines || { npm: '*' };
    return npm;
}

module.exports = function(version, range = readParentPackage()) {
    const installedVersion = semver.valid(version);
    const requiredRange = semver.validRange(range);

    if (!installedVersion) {
        throw new Error(`Invalid installed version specified: ${version}`);
    }

    if (!requiredRange) {
        throw new Error(`Invalid NPM version range specified: ${range}`);
    }

    console.error(`Verifying npm ${installedVersion} satisfies ${requiredRange}`);
    const valid = semver.satisfies(installedVersion, requiredRange);

    if (!valid) {
        throw new Error(`Error: this package requires NPM ${requiredRange}. You have ${installedVersion} + installed.`);
    }
};
