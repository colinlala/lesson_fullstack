<<<<<<< HEAD
// 杨辉三角
/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let arr = [[1]];//第一个固定是1
    for (let i = 1; i < numRows; i++) {
        arr[i] = [];
        arr[i][0] = 1;//每一行左右两边也都是1
        arr[i][i] = 1;
        for (let x = 1; x < i; x++) {//动态规划
            arr[i][x] = arr[i - 1][x - 1] + arr[i - 1][x];
        }
    }
    return arr;

=======
// 杨辉三角
/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let arr = [[1]];//第一个固定是1
    for (let i = 1; i < numRows; i++) {
        arr[i] = [];
        arr[i][0] = 1;//每一行左右两边也都是1
        arr[i][i] = 1;
        for (let x = 1; x < i; x++) {//动态规划
            arr[i][x] = arr[i - 1][x - 1] + arr[i - 1][x];
        }
    }
    return arr;

>>>>>>> 3060b42 (第一次Git提交所有文件)
};