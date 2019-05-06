// Exec Sync
const child_process = require('child_process');
const fs = require('fs');
const check = require('./check');

function execSync(command) {
    // Run the command in a subshell
    return child_process.execSync(command, { encoding: 'UTF-8' }).trim();
}

const version = execSync('npm --version');
const range = process.argv.slice(2)[0];

try {
    check(version, range);
    console.log(`Valid version: ${version}`);
} catch (err) {
    console.error(err);
}
