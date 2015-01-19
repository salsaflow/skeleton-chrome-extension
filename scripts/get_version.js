var fs = require('fs');

var pkg = JSON.parse(fs.readFileSync('code/manifest.json'));
process.stdout.write(pkg.version + '\n');
