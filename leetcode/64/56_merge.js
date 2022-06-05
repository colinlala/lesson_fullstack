/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-05 18:04:59
 * @LastEditTime: 2022-06-05 19:09:11
 * @Description: 56 合并区间
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const len = intervals.length, res = [];
    if (len === 0) return res;
    intervals.sort((a, b) => a[0] - b[0])
    let prev = intervals[0];
    for (let i = 0; i < len; ++i) {
        let curr = intervals[i]
        // 如果下个区间的第二位大于上个区间的第一位，说明没有重叠区域，则可以直接push
        if (curr[0] > prev[1]) {
            res.push(prev)
            prev = curr
        } else {
            // 有重叠区域，两个区间的最右边进行比较，取最大值，放入，就改变了原数组
            prev[1] = Math.max(curr[1], prev[1])
        }
    }
    // 最后一个区域手动push
    res.push(prev)
    return res;
};

// console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))