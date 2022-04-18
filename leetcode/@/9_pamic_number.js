// 回文数
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x < 0 || (x % 10 == 0 && x!= 0)) return false
    let temp = 0, s = x
    while(s){
        temp = temp * 10 + s % 10
        s = Math.floor(s/10)
    }
    return x === temp
};

// var isPalindrome = function(x) {
//     return x.toString() === x.toString().split('').reverse().join("") ? true : false
// };



// var isPalindrome = function(x) {
//     let temp = x.toString()
//     const n = Math.floor(temp.length / 2)
//     for(let i = 0; i < n; i++){
//         if(temp[i] != temp[temp.length-i-1]) return false
//     }
//     return true
// };

console.log(121%10);