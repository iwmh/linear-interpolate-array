var fs = require('fs');

// read the test dta
var json = JSON.parse(fs.readFileSync('./testdata.json', 'utf8'));

// convert to comma-sepatated array
var normalX = json.normal.x.split(',');
var normalY = json.normal.y.split(',');

var randomX = json.normal.x.split(',');
var randomY = json.normal.y.split(',');

/**
 * 
 * @param {*} targetX Array
 * @param {*} targetY Array
 * @param {*} baseX   Array
 * 
 * 
 * 
 * I consider the base is the given.
 */

var li = function(targetX, targetY, baseX, option){
  var data = {
    x: [],
    y: [],
  };

  // iterate baseX
  for(let b = 0, lengthBase = baseX.length; b < lengthBase; b++){
    for(let t = 0, lengthTargt = targetX.length; t < lengthTargt; t++){
      // Check if x in targetX is the same value as x in baseX
      if(targetX[t] === baseX[b]){
        data.x.push(targetX[t]);
        data.y.push(targetY[t]);
      } else if (targetX[t] > baseX[b]){
        let liX = baseX[b];
        let liY = targetY[t - 1] + (targetY[t] - targetY[t - 1]) * (baseX[b] - targetX[t - 1]) / targetX[t] - targetX[t - 1]
        data.x.push(liX);
        data.y.push(liY);
        break;
      }
    }
  }

  return data;
}

var data = li(randomX, randomY, normalX);
console.log(data);
