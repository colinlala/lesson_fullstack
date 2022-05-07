<<<<<<< HEAD
// 最常见单词
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    const temp = paragraph.toLowerCase().split(/\W+/)
    let map = new Map()
    for(let char of temp){
        if(!banned.includes(char))
        map.set(char,(map.get(char) || 0) + 1)
    }
    const arr = [...map].sort((a,b) => b[1]-a[1])
    return arr[0][0]
=======
// 最常见单词
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    const temp = paragraph.toLowerCase().split(/\W+/)
    let map = new Map()
    for(let char of temp){
        if(!banned.includes(char))
        map.set(char,(map.get(char) || 0) + 1)
    }
    const arr = [...map].sort((a,b) => b[1]-a[1])
    return arr[0][0]
>>>>>>> 3060b42 (第一次Git提交所有文件)
};