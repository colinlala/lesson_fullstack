/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-23 14:38:09
 * @LastEditTime: 2022-05-23 15:05:49
 * @Description: 5 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length;
    if (!s || len < 2) return s;
    let start = 0, maxStr = '';
    for (let i = 0; i < len; i++) {
        let j = palindrome(i, i)
        let o = palindrome(i, i + 1)
        if (j.length > start) {
            maxStr = j;
            start = j.length;
        }
        if (o.length > start) {
            maxStr = o;
            start = o.length;
        }

    }
    function palindrome(left, right) {
        while (left >= 0 && right < len && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }
    return maxStr;
};