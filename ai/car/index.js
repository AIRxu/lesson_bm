// 读取文件的实现

var fs = require('fs'); // node的核心模块
var path = require('path') //路径模块

// uuid npm 第三方

// fs.readFile('texttd.txt', function (err, data) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data.toString());
// })

function getDirFiles(startPath) {
  let result = [];
  // 递归
  function finder (parentPath) {
    // console.log(path);
    // 步读取目录并把目录中的项返回到数组中
    let files = fs.readdirSync(parentPath);
    if (!files.length) return;
    // console.log(files);
    files.forEach(function(val, index) {
      // console.log(val,index);
      // 判断是目录还是文件
      let fPath = path.join(parentPath,val);
      // console.log(fPath);
      let stats = fs.statSync(fPath);
      if(stats.isDirectory()) {
        finder(fPath);
      }
      if(stats.isFile()) {
        result.push(fPath);
      }
    })
  }
  finder(
    path.join(process.cwd(),startPath)
  );
  return result;
}
console.log(getDirFiles('src'));