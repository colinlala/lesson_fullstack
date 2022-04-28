/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-28 19:12:06
 * @LastEditTime: 2022-04-28 19:58:04
 * @Description: 异步 回调函数
 *
 */
// 1. os（operation system）  fs
//      js 挺近后端开发
//      os  fs（file system）
// 2. 路径 path
//      1.js在内存中 -> fs.readFile -> I/O -> 硬盘 -> 读入内存
// node内置fs

const fs = require('fs');  // node js 关键字  commonjs模块化规范之一
// fs.readFile('./readme.md', function (err, data) {
//     if (!err) {
//         console.log(data.toString());
//     } else {
//         // console.log(err);
//         console.error(err);
//     }
// })

// 多个异步任务要去完成，控制顺序怎么办？
// const files = ['./a.txt', 'readme.md', './b.txt'];  // readme.md依旧最后运行
const files = ['./a.txt', './b.txt', 'readme.md'];
// 封装了  抽象 callback  function
function readFile(path, callback) {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        callback(data);
    })
}
readFile('./readme.md', (data) => {
    console.log(data.toString(), '#####################');
    readFile('./a.txt', (data) => {
        console.log(data.toString(), '--------------')
        readFile('./b.txt', (data) => {
            console.log(data.toString(), '@@@@@@@@@@@@@@@@@@')
        })
    })
})

// 异步
// files.forEach((file) => {
//     fs.readFile(file, function (err, data) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.error(data.toString());
//     })
// })


