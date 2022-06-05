/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-05 17:19:07
 * @LastEditTime: 2022-06-05 18:02:46
 * @Description: 452 用最少数量的箭引爆气球
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
// var findMinArrowShots = function (points) {
//     const len = points.length;
//     if (len === 0) return 0;
//     // 从小到大排序，好比较,取相近的值
//     points.sort((a, b) => a[1] - b[1]);
//     let count = 1;
//     let resArr = [points[0]];
//     let curr, last;
//     // 从第二个开始比较
//     for (let i = 1; i < len; i++) {
//         curr = points[i];
//         last = resArr[resArr.length - 1];
//         if (curr[0] > last[1]) {
//             resArr.push(curr);
//             count++;
//         }
//     }
//     return count;
// };

// 贪心算法
var findMinArrowShots = function (points) {
    const len = points.length;
    if (len === 0) return 0;
    // points.sort((a, b) => a[0] - b[0]) 由于下面比较的是元素的第二位元素，
    //                                          会造成跳过重叠区间
    // 按元素的第二位从小到大排序，好比较最大的重叠区间
    points.sort((a, b) => a[1] - b[1])
    // 至少应该有一个区间不相交
    let count = 1
    let x_end = points[0][1];
    for (let i = 1; i < len; ++i) {
        // 如果下一个区间的第一位大于x_end(上一个大区间的第二位)则没有重叠区间，count++
        if (points[i][0] > x_end) {
            ++count;
            // 更新x_end
            x_end = points[i][1];
        }
    }
    return count;
};