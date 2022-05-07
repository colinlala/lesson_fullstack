/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-27 09:07:36
 * @LastEditTime: 2022-04-27 09:13:57
 * @Description: 有效的完全平方数
 * 
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let left = 0;
    let right = num;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (mid * mid <= num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if (right * right < num) return false;
    return true;
};