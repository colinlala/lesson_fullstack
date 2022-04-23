// 运行  readme.md 在硬盘中
// 调入 内存中来 交给 cpu 运行

// 4.js拿到执行权，在内存中
// 去硬盘走一遭    路程

// require 关键字 ，引入一个模块 
const fs = require('fs');   // fs  filesystem   硬盘   node内置的模块
fs.readFile('./1.js',function(err,data){
    console.log(data.toString());
});   // 耗时
console.log('2222222222222222');