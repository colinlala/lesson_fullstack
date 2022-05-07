<<<<<<< HEAD
// 字符的最短距离
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    let array = [];
    for (let i = 0; i < s.length; i++) {
        array[i] = s.length;
    }
    for (let i = 0; i < s.length; i++){
        if ( s.substring(i, i+1) === c){
            for (let j = 0; j < s.length; j++){
                array[j] = Math.min(Math.abs(i - j),array[j])
            }
        }
    }
    return array;
=======
// 字符的最短距离
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    let array = [];
    for (let i = 0; i < s.length; i++) {
        array[i] = s.length;
    }
    for (let i = 0; i < s.length; i++){
        if ( s.substring(i, i+1) === c){
            for (let j = 0; j < s.length; j++){
                array[j] = Math.min(Math.abs(i - j),array[j])
            }
        }
    }
    return array;
>>>>>>> 3060b42 (第一次Git提交所有文件)
};