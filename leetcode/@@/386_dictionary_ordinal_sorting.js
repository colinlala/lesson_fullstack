<<<<<<< HEAD
// 字典序数排序
/**
 * @param {number} n
 * @return {number[]}
 */
 var lexicalOrder = function(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i + '');
    }
    result = result.sort();
    return result;

};
=======
// 字典序数排序
/**
 * @param {number} n
 * @return {number[]}
 */
 var lexicalOrder = function(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i + '');
    }
    result = result.sort();
    return result;

};
>>>>>>> 3060b42 (第一次Git提交所有文件)
// no