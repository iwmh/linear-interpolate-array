/**
 * 
 * @param {*} targetX
 * @param {*} targetY
 * @param {*} baseX
 * 
 */

module.exports = function(targetX, targetY, baseX, option){
  
  // the data returned
  var data = {
    x: [],
    y: [],
  };

  // iterate over the base
  for(let b = 0, lengthBase = baseX.length; b < lengthBase; b++){
    // iterate over the target 
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

