var fs = require('fs');

var numNewLines = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;
console.log(numNewLines);