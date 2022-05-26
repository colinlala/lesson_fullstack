/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-26 17:38:26
 * @LastEditTime: 2022-05-26 18:00:54
 * @Description: 560 和为k的子数组
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    // preSum = (preSum-k) + k 所以只要preSum-k在map里面有就count++
    let map = new Map(), len = nums.length, preSunm = 0, count = 0;
    map.set(0, 1);
    for (let i = 0; i <= len; i++) {
        preSunm = preSunm + nums[i];
        if (map.has(preSunm - k)) {
            count = count + map.get(preSunm - k);
        }
        if (map.has(preSunm)) {
            map.set(preSunm, map.get(preSunm) + 1);
        } else {
            map.set(preSunm, 1)
        }
    }
    return count;
};