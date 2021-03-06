<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 22:04:36
 * @LastEditTime: 2022-04-25 22:04:37
 * @Description: 二分查找
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var min = 0
    var max = nums.length - 1
    while (min <= max) {
        // Math.floor() 返回小于或等于一个给定数字的最大整数。
        var mid = Math.floor((min + max) / 2);
        if (target == nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            max = mid - 1;
        } else if (target > nums[mid]) {
            min = mid + 1;
        }
    }
    return -1;
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 22:04:36
 * @LastEditTime: 2022-04-25 22:04:37
 * @Description: 二分查找
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var min = 0
    var max = nums.length - 1
    while (min <= max) {
        // Math.floor() 返回小于或等于一个给定数字的最大整数。
        var mid = Math.floor((min + max) / 2);
        if (target == nums[mid]) {
            return mid;
        } else if (target < nums[mid]) {
            max = mid - 1;
        } else if (target > nums[mid]) {
            min = mid + 1;
        }
    }
    return -1;
>>>>>>> 3060b42 (第一次Git提交所有文件)
};