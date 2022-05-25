/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-24 22:57:05
 * @LastEditTime: 2022-05-24 22:57:08
 * @Description: 14 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let l = strs.length, first = strs[0], minLen = Number.MAX_SAFE_INTEGER;
    if (l === 0 || first === "") return "";
    for (let i = 1; i < l; i++) {
        // 每次拿第一个元素以后面的比较
        const len = StrLongestCommonPrefix(first, strs[i]);
        minLen = Math.min(len, minLen);
    }
    return first.slice(0, minLen);
};
function StrLongestCommonPrefix(s, t) {
    let i = 0, j = 0, res = 0;
    // 比较成员的每一个字母，直到不相等，输出res，得到最长的值
    while (i < s.length && j < t.length) {
        if (s[i] === t[i]) {
            res++;
        } else {
            return res;
        }
        i++;
        j++;
    }
    return res;
}