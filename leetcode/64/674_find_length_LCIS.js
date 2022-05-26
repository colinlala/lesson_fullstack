/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-25 21:46:22
 * @LastEditTime: 2022-05-25 21:56:31
 * @Description: 674 最长连续递增序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    // gMaxLen最终长度，maxLen每次比较的累计长度
    let len = nums.length, left = 0, right = 1, gMaxLen = 1, maxLen = 1;
    if (len === 0) return 0;
    while (right < len) {
        if (nums[right] > nums[left]) { maxLen++; }
        else { maxLen = 1; }
        left++;
        right++;
        gMaxLen = Math.max(gMaxLen, maxLen);
    }
    return gMaxLen;
};