/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-28 10:14:28
 * @LastEditTime: 2022-05-28 10:49:31
 * @Description: 18 四数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let len = nums.length, res = [];
    if (nums == null || len < 4) return res;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        if (nums[i] > target && !(nums[i] < 0 && target < 0)) { // 如果最小数字大于target，那么和也一定大于target, 负数应该除外
            break;
        }
        if (i > 0 && nums[i] == nums[i - 1]) { // 当前数字与上个数字相同，说明已经循环过了，跳出本次循环
            continue;
        }
        let left = i + 1;  // 确定第二个数字，初始值为nums[1]
        let right = len - 1; // 确定第四个数字，初始值为最后一个数字
        while (left < right - 1) { // left和right中间还有一个数 所以 < right-1
            let j = left + 1; // 确定第三个数字，初始值为第二个数字和第四个数字中间的第一个数字
            while (j < right) {
                const sum = nums[i] + nums[left] + nums[j] + nums[right]
                if (sum === target) {
                    res.push([nums[i], nums[left], nums[j], nums[right]]);
                    j++;
                    // j去重
                    while (j < right && nums[j] == nums[j - 1]) {
                        j++;
                    }
                } else if (sum > target) {
                    // 因为排了序，大于target，就找小一点的数，right--
                    right--;
                } else {
                    // 因为排了序，小于target，就找大一点的数，j++
                    j++;
                }
            }
            // left去重
            while (left < right && nums[left] == nums[left + 1]) {
                left++;
            }
            left++;
            right = len - 1;
        }
    }
    return res;
};