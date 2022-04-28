/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-28 19:57:00
 * @LastEditTime: 2022-04-28 20:17:43
 * @Description: 同步fs.readFileSync
 * 
 */
const fs = require('fs');   // node js   commonjs

const files = ['./a.txt', './b.txt', 'readme.md'];

// 嵌套
for (let file of files) {
    // 可以为读取文件停下来   同步
    // 阻塞代码

    const data = fs.readFileSync(file);
    console.log(data.toString());
    // fs.readFile(file, (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.error(data.toString());
    // })
}

