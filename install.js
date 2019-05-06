const check = require('./check');

try {
    const version = process.argv.slice(2)[0];
    return check(version);
} catch(err) {
    console.error(err);
    process.exit(1);
}
