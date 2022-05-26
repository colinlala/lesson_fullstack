/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-26 17:02:37
 * @LastEditTime: 2022-05-26 17:14:12
 * @Description: 11 盛最多水的容器
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let right = height.length - 1, left = 0, max = 0;
    while (left < right) {
        // 底就是两指针距离，高得判断谁小
        let d = right - left;
        let h = Math.min(height[left], height[right]);
        max = Math.max(max, d * h);
        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};