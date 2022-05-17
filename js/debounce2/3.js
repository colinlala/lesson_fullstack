/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-17 10:04:58
 * @LastEditTime: 2022-05-17 10:20:33
 * @Description:给定一个非空字符串s，最多删除一个字符串。判断是否成为回文字符串
 */
// 'aba' 本身就是回文   'abca' 删除b|c   一定是个回文子串
// 递归
// 1. 字符串本身是回文 return true
// 2. 字符串不是回文  双指针  遍历字符串  递归
const validPalindromeOneC = function (s) {
    const len = s.length;
    let i = 0, j = len - 1;
    // 左右指针均满足对称时，一起向中间走
    while (i < j && s[i] === s[j]) {
        i++;
        j--;
    }
    if (isPalindrome(i + 1, j)) { // 删除前面的
        return true;
    }
    if (isPalindrome(i, j - 1)) { // 删除后面的
        return true;
    }
    function isPalindrome(start, end) {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
    return false;
}
