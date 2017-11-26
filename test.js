var fs = require('fs');
var li = require('./index.js');

// read the test data
var json = JSON.parse(fs.readFileSync('./testdata.json', 'utf8'));

// convert to comma-sepatated array
var normalX = json.normal.x.split(',');
var normalY = json.normal.y.split(',');
var randomX = json.normal.x.split(',');
var randomY = json.normal.y.split(',');

// liner interpolated the contents of array based on the base array.
var data = li(randomX, randomY, normalX);

console.log(data);