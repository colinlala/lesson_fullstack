/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-26 17:16:28
 * @LastEditTime: 2022-05-26 17:37:10
 * @Description: 26 删除有序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let len = nums.length;
    if (len == 0 || nums == null) return 0;
    let left = 0;
    for (let right = 1; right < len; right++) {
        if (nums[left] != nums[right]) {
            nums[++left] = nums[right]
        }
    }
    return ++left;
};