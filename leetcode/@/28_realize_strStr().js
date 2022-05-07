<<<<<<< HEAD
// 实现strStr()
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};


// var strStr = function(haystack, needle) {
//     if (needle === "") return 0
//     for (var i = 0; i < haystack.length; i++) {
//         if (haystack[i] === needle[0]) {
//             if (haystack.substring(i, i + needle.length) === needle) return i;
//         }
//     }
//     return -1
=======
// 实现strStr()
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};


// var strStr = function(haystack, needle) {
//     if (needle === "") return 0
//     for (var i = 0; i < haystack.length; i++) {
//         if (haystack[i] === needle[0]) {
//             if (haystack.substring(i, i + needle.length) === needle) return i;
//         }
//     }
//     return -1
>>>>>>> 3060b42 (第一次Git提交所有文件)
// };