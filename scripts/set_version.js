var fs = require('fs');

var path = 'code/manifest.json';

var pkg = JSON.parse(fs.readFileSync(path));
pkg.version = process.argv[2];
fs.writeFileSync(path, JSON.stringify(pkg, null, 2));
