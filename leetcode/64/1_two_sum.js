/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-28 11:11:43
 * @LastEditTime: 2022-05-28 11:13:31
 * @Description: 1 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const len = nums.length;
    let map = new Map();
    for (let i = 0; i < len; i++) {
        map.set(nums[i], i);
    }
    for (let i = 0; i < len; i++) {
        const findNum = target - nums[i];
        if (map.has(findNum) && map.get(findNum) !== i) {
            return [i, map.get(findNum)]
        }
    }

};