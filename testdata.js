// テストデータを作成する。

var fs = require('fs');

const normaldata = normalData(100);
const randomdata = randomData(100);

var ndata = {
  x: normaldata.x,
  y: normaldata.y,
};

var rdata = {
  x: randomdata.x,
  y: randomdata.y,
}

var dataSet = {
  normal: ndata,
  random: rdata
}

// ランダムなデータ（可変長）を作成する。
// x軸：増える一方
// y軸：ランダム(何でもいい)

function Data() {
  this.x = '';
  this.y = '';
}

function normalData(to){
  // 整数チェック
  if(!Number.isInteger(to)){
    throw 'InvalidArgument';
  } 
  
  let data = new Data();
  for(let i = 0; i <= to; i++){
    data.x = data.x + i;
    data.y = data.y + i * 20;
    if(! (i === to)){
      data.x = data.x + ',';
      data.y = data.y + ',';
    }
  }
  return data;
}

function randomData(to){
  // 整数チェック
  if(!Number.isInteger(to)){
    throw 'InvalidArgument';
  }

  let data = new Data();
  for(let i = 0; i <= to; i++){
    const r = Math.random() * ((i + 1) - i) + i;
    data.x = data.x + r;
    data.y = data.y + r * 30;
    if(! (i === to)){
      data.x = data.x + ',';
      data.y = data.y + ',';
    }
  }
  return data;
}

fs.writeFile('testdata.json', JSON.stringify(dataSet, null, '  '), () => {
  console.log('file generated.')
});
