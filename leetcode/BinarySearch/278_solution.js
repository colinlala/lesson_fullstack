<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-29 20:31:25
 * @LastEditTime: 2022-04-29 20:31:53
 * @Description: 第一个错误版本
 * 
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let low = 1, high = n;
        let middle;
        while (low < high) {
            middle = Math.floor((low + high) / 2)

            if (isBadVersion(middle)) {
                high = middle;
            } else {
                low = middle + 1;
            }
        }
        return high;
    };
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-29 20:31:25
 * @LastEditTime: 2022-04-29 20:31:53
 * @Description: 第一个错误版本
 * 
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let low = 1, high = n;
        let middle;
        while (low < high) {
            middle = Math.floor((low + high) / 2)

            if (isBadVersion(middle)) {
                high = middle;
            } else {
                low = middle + 1;
            }
        }
        return high;
    };
>>>>>>> 3060b42 (第一次Git提交所有文件)
};