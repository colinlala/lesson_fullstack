<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-28 09:36:08
 * @LastEditTime: 2022-04-28 09:36:08
 * @Description: 寻找比目标字母大的最小字母
 * 
 */
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let arr = Array.from(new Set(letters));
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) left = mid + 1;
        else if (arr[mid] > target) right = mid;
    }

    if (arr[right] > target) return arr[right];
    else return arr[0];
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-28 09:36:08
 * @LastEditTime: 2022-04-28 09:36:08
 * @Description: 寻找比目标字母大的最小字母
 * 
 */
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let arr = Array.from(new Set(letters));
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) left = mid + 1;
        else if (arr[mid] > target) right = mid;
    }

    if (arr[right] > target) return arr[right];
    else return arr[0];
>>>>>>> 3060b42 (第一次Git提交所有文件)
};