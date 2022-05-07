<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 22:31:30
 * @LastEditTime: 2022-04-26 22:36:53
 * @Description: 
 * 
 */

/**
 * @description: 
 * @param {*} nums
 * @param {*} target
 * @return {*}
 */
const twoSum = function (nums, target) {
    // 用空间换时间，减少一次循环
    const diffs = {};
    // 缓存数组长度
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (diffs[target - nums[i]] !== undefined) {
            return [diffs[target - nums[i]], i];
        } else {
            diffs[nums[i]] = i;
        }
    }
}

=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 22:31:30
 * @LastEditTime: 2022-04-26 23:13:22
 * @Description: 
 * 
 */

/**
 * @description: 
 * @param {*} nums
 * @param {*} target
 * @return {*}
 */
const twoSum = function (nums, target) {
    // 用空间换时间，减少一次循环
    const diffs = {};
    // 缓存数组长度
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (diffs[target - nums[i]] !== undefined) {
            return [diffs[target - nums[i]], i];
        } else {
            diffs[nums[i]] = i;
        }
    }
}

>>>>>>> 3060b42 (第一次Git提交所有文件)
console.log(twoSum([2, 7, 11, 15], 9));