/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-28 09:30:51
 * @LastEditTime: 2022-04-28 09:30:52
 * @Description: x的平方根
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 0;
    let right = x;
    while (left <= right) {
        let mid = left + ((right - left) >> 1);// 这样写是防止溢出【x>>1 表示x除以2并取整，缩小一下遍历的范围】
        if (mid * mid <= x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};