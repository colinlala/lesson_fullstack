/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-28 20:51:22
 * @LastEditTime: 2022-04-28 21:25:43
 * @Description: 查找指定目录下的最大文件
 * 
 */
const { count } = require('console');
var fs = require('fs');
var path = require('path');

/**
 * @description: 查找指定目录下的最大文件
 * @param {string} dir  路径
 * @param {function} callback  回调函数
 * @return {*}
 */
function findLargest(dir, callback) {
    fs.readdir(dir, (err, files) => {
        // console.log(files);
        if (err) {
            return callback(err);
        }
        console.log(files);
        // callback(null, files);

        // 是文件还是目录？
        // fs.readFile(files[0]);
        var couter = files.length;  //当前目录下的子元素数量
        var errored = false;  // 是否出错
        var stats = []; // 文件信息

        files.forEach((file, index) => {
            // 得到相对于当前4.js的对应的目录
            // console.log(path.join(dir, file));
            fs.stat(path.join(dir, file), (err, stat) => {
                if (errored) return;
                if (err) {
                    errored = true;
                    return callback(err);
                }
                stats[index] = stat;  // 所有文件信息 入数组
                if (--couter == 0) { // 最后一个
                    var fileStats = stats
                        .filter((stat) => stat.isFile())
                    // console.log(largest);
                    let maxFileSize = 0;
                    for (let fileStat of fileStats) {
                        if (fileStat.size > maxFileSize) {
                            maxFileSize = fileStat.size;
                        }
                    }
                    callback(null, maxFileSize);
                }
            })
        })
    }) // 异步
}
findLargest('./test', (err, fileSize) => {
    if (err) {
        return console.error(err);
    }
    console.log('largest file war:', fileSize);
})