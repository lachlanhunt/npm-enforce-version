// Setup preinstall hook

const fs = require('fs');
const path = require('path');
const findNodeModules = require('find-node-modules');

const [, nodeModules] = findNodeModules();

console.log(nodeModules);

if (!nodeModules) return; // No parent node_modules

const hooksDir = path.resolve(nodeModules, '.hooks');
console.log(hooksDir);

if (!fs.existsSync(hooksDir)) {
    console.log("Making hooks dir");
    fs.mkdirSync(hooksDir);
}

const symlinkPath = path.resolve(hooksDir, "preinstall");
const symlinkTarget = path.relative(hooksDir, './hooks/preinstall');

console.log(symlinkPath, "-->", symlinkTarget);

fs.symlinkSync(symlinkTarget, symlinkPath);

// Run initial version check
require('./');