<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 16:15:36
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 16:15:36
 * @Description: 存在重复元素
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // Size属性将会返回Set对象中元素的个数。自动去重
    let newArr = new Set(nums)
    if (newArr.size === nums.length)
        return false;
    else
        return true;
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 16:15:36
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 16:17:57
 * @Description: 存在重复元素
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // Size属性将会返回Set对象中元素的个数。自动去重
    let newArr = new Set(nums)
    if (newArr.size === nums.length)
        return false;
    else
        return true;
>>>>>>> 3060b42 (第一次Git提交所有文件)
}