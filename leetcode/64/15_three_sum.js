/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-27 17:25:26
 * @LastEditTime: 2022-05-27 18:33:38
 * @Description: 15 三数之和
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let len = nums.length, res = [];
    // 排好序好操作
    nums.sort((a, b) => a - b);
    // i<len-2 是因为 后面有两个指针，如果i<len-1，则start和end重叠再运行一次没有必要，而且越界
    for (let i = 0; i < len - 2; i++) {
        // i===0 i第一位就不需要比较          （去重） nums[i] !== nums[i - 1]判断i是否与前一个相等，相等则进行下一次循环i++
        if (i === 0 || nums[i] !== nums[i - 1]) {
            // i、i+1、....、len-1
            let start = i + 1, end = len - 1;
            while (start < end) {
                if (nums[i] + nums[start] + nums[end] === 0) {
                    // 符合就push进res，左边的++，右边的--
                    res.push([nums[i], nums[start], nums[end]]);
                    start++;
                    end--;
                    // start去重 
                    while (start < end && nums[start] === nums[start - 1]) {
                        start++;
                    }
                    // end去重
                    while (start < end && nums[end] === nums[end + 1]) {
                        end--;
                    }
                } else if (nums[i] + nums[start] + nums[end] < 0) {
                    // 因为排好了序，所以小于0，就找大的，start就++
                    start++;
                } else {
                    // 因为排好了序，所以大于0，所以就找小的，end就--
                    end--;
                }
            }
        }
    }
    return res;
};
// console.log([-1, 0, 2, 1, -1, -4].sort((a, b) => a - b))