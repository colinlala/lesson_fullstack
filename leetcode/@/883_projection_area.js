<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 10:03:18
 * @LastEditTime: 2022-04-26 10:03:55
 * @Description: 三维形体投影面积
 * 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let left = 0;
    let right = 0;
    let up = 0;
    let n = grid.length;
    for (let i = 0; i < n; i++) {
        left += Math.max(...grid[i])
        let temp = []
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0) {
                up++
            }
            temp.push(grid[j][i])
        }
        right += Math.max(...temp)
    }
    return left + right + up

=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 10:03:18
 * @LastEditTime: 2022-04-26 10:03:55
 * @Description: 三维形体投影面积
 * 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let left = 0;
    let right = 0;
    let up = 0;
    let n = grid.length;
    for (let i = 0; i < n; i++) {
        left += Math.max(...grid[i])
        let temp = []
        for (let j = 0; j < n; j++) {
            if (grid[i][j] !== 0) {
                up++
            }
            temp.push(grid[j][i])
        }
        right += Math.max(...temp)
    }
    return left + right + up

>>>>>>> 3060b42 (第一次Git提交所有文件)
};