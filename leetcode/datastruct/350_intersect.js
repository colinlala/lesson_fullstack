<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-29 21:03:31
 * @LastEditTime: 2022-04-29 21:03:32
 * @Description: 两个数组的交集 II
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const map = {};
    const res = [];
    for (const num1 of nums1) { // 记录nums1各个数字的出现次数
        if (map[num1]) {
            map[num1]++;
        } else {
            map[num1] = 1;
        }
    }
    for (const num2 of nums2) { // 遍历nums2，看看有没有数字在nums1出现过
        const val = map[num2];
        if (val > 0) {            // 有出现过
            res.push(num2);         // 推入res数组
            map[num2]--;            // 匹配掉一个，就减一个
        }
    }
    return res;
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-29 21:03:31
 * @LastEditTime: 2022-04-29 21:03:32
 * @Description: 两个数组的交集 II
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const map = {};
    const res = [];
    for (const num1 of nums1) { // 记录nums1各个数字的出现次数
        if (map[num1]) {
            map[num1]++;
        } else {
            map[num1] = 1;
        }
    }
    for (const num2 of nums2) { // 遍历nums2，看看有没有数字在nums1出现过
        const val = map[num2];
        if (val > 0) {            // 有出现过
            res.push(num2);         // 推入res数组
            map[num2]--;            // 匹配掉一个，就减一个
        }
    }
    return res;
>>>>>>> 3060b42 (第一次Git提交所有文件)
};