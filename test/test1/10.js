/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-30 16:39:49
 * @LastEditTime: 2022-04-30 16:50:00
 * @Description: RegExp.$1。$1,$2上就是按顺序对应小括号里面的小正则 捕获到的内容。 
 * 
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(arr.join('').replace(/([0-9]{3})([0-9]{3})([0-9]{3})/, function () {
    // return '---';// ---4567890
    console.log(RegExp.$1);  // 123
    console.log(RegExp.$2);  // 456
    console.log(RegExp.$3);  // 789
    // return `(${RegExp.$1})(${RegExp.$2})(${RegExp.$3})`;  //(123)(456)(789)0
    return `(${RegExp.$1}) ${RegExp.$2}-${RegExp.$3}`;  //(123) 456-7890

}))   