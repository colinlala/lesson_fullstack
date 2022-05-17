/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-17 09:36:58
 * @LastEditTime: 2022-05-17 10:04:23
 * @Description:判断一个字符串是否是回文字符串
 */

// function isPalindrome(str) {
//     // 时间开销有点大
//     const reversedStr = str.split('').reverse().join('');
//     return reversedStr == str;
// }
// console.log(isPalindrome('str'));

// 对称法
// 从中间位置劈开   两边的两个字符串在内容上是全对称的
function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {   // 对称点
            return false;
        }
    }
    return true;
}

