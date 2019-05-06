// Setup preinstall hook

const fs = require('fs');
const path = require('path');
const findNodeModules = require('find-node-modules');

const [, nodeModules] = findNodeModules();

console.log(nodeModules);

if (!nodeModules) return; // No parent node_modules

const hooksDir = path.resolve(nodeModules, '.hooks');

if (!fs.existsSync(hooksDir)) {
    fs.mkdirSync(hooksDir);
}

const symlinkPath = path.resolve(hooksDir, "preinstall");
const symlinkTarget = path.relative(hooksDir, './hooks/preinstall');

if (fs.existsSync(symlinkPath)) {
    console.warn("npm preinstall hook already exists, not overwriting.");
} else {
    fs.symlinkSync(symlinkTarget, symlinkPath);
}

// Run initial version check
require('./');
