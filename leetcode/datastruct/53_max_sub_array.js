<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 23:15:10
 * @LastEditTime: 2022-04-26 23:18:15
 * @Description: 最大子数组和
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const length = nums.length;
    let max = nums[0];
    for (let i = 1; i < length; i++) {
        nums[i] += Math.max(nums[i - 1], 0);
        max = Math.max(max, nums[i])
    }
    return max;
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 23:15:10
 * @LastEditTime: 2022-04-26 23:18:15
 * @Description: 最大子数组和
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const length = nums.length;
    let max = nums[0];
    for (let i = 1; i < length; i++) {
        nums[i] += Math.max(nums[i - 1], 0);
        max = Math.max(max, nums[i])
    }
    return max;
>>>>>>> 3060b42 (第一次Git提交所有文件)
};