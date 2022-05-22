/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-22 17:44:31
 * @LastEditTime: 2022-05-22 19:06:39
 * @Description: 数组扁平化
 */
// function flatten(arr) {
//     var result = [];    // es5
//     const len = arr.length;
//     for (var i = 0; i < len; i++) {
//         if (Array.isArray(arr)) {  // 后起之秀
//             result = result.concat(arr[i])
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result
// }

// console.log(flatten([1, 2, [3], [4, 5]]));   // [ 1, 2, 3, 4, 5 ]
// console.log(flatten([1, 2, [3, [4, 5]]]));   // [ 1, 2, 3, [ 4, 5 ] ]
// console.log(flatten('qwe'))

// 递归版本
function flatten(arr) {
    var result = [];    // es5
    for (var i = 0, len = arr.length; i < len; i++) {
        if (Array.isArray(arr)) {  // 后起之秀
            result = result.concat(flatten(arr[i]));  // 解决多维数组
        } else {
            result.push(arr[i]);
        }
    }
    return result
}
console.log(flatten([1, 2, [3, [4, 5]]]));   // [ 1, 2, 3, 4, 5 ]
