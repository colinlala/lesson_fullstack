<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 15:41:18
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 15:41:18
 * @Description: 有多少小于当前数字的数字
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let temp = nums.slice();
    let res = [];
    // 升序
    temp.sort((a, b) => a - b)
    for (let num of nums) {
        res.push(temp.indexOf(num));
    }
    return res;
};
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 15:41:18
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 15:41:18
 * @Description: 有多少小于当前数字的数字
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let temp = nums.slice();
    let res = [];
    // 升序
    temp.sort((a, b) => a - b)
    for (let num of nums) {
        res.push(temp.indexOf(num));
    }
    return res;
};
>>>>>>> 3060b42 (第一次Git提交所有文件)
