/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 15:30:26
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 15:30:26
 * @Description: 按奇偶排序数组
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let ans = [];
    for (let i of nums) {
        if (i % 2 == 0) {
            ans.unshift(i)
        } else {
            ans.push(i);
        }
    }
    return ans;
};