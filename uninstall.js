// Remove preinstall hook

const fs = require('fs');
const path = require('path');
const findNodeModules = require('find-node-modules');

const [, nodeModules] = findNodeModules();

console.log(nodeModules);

if (!nodeModules) return; // No parent node_modules

const hooksDir = path.resolve(nodeModules, '.hooks');

if (!fs.existsSync(hooksDir)) return; // No hooks to remove

const symlinkPath = path.resolve(hooksDir, "preinstall");

if (!fs.existsSync(symlinkPath)) return; // No preinstall hook

fs.unlinkSync(symlinkPath);
