/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-28 10:52:51
 * @LastEditTime: 2022-05-28 11:08:33
 * @Description: 167 两数之和2-输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// hashmap
var twoSum = function (numbers, target) {
    const len = numbers.length;
    let map = new Map();
    for (let i = 0; i < len; i++) {
        map.set(numbers[i], i);
    }
    for (let i = 0; i < len; i++) {
        const findNum = target - numbers[i];
        if (map.has(findNum)) {
            return [i + 1, map.get(findNum) + 1];
        }
    }
};


// 双指针
// var twoSum = function (numbers, target) {
//     const len = numbers.length;
//     let [left, right] = [0, len - 1];
//     while (left < right) {
//         const n = numbers[left] + numbers[right] - target;
//         if (n === 0) {
//             return [left + 1, right + 1];
//         } else if (n < 0) {
//             // 小于0，表示得找大一点的数,left++
//             left++;
//         } else {
//             // 大于0，表示得找小一点的数,right--
//             right--;
//         }
//     }
// };