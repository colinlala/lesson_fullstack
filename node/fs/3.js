/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-28 20:10:27
 * @LastEditTime: 2022-04-28 20:17:19
 * @Description: fs.stat 或 fs.statSync 方法可以获取文件信息
 * 
 */
const fs = require('fs');
fs.stat('./a.txt', function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data, '---------------');
})
const info = fs.statSync('./a.txt');
console.log(info);