/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-29 16:45:58
 * @LastEditTime: 2022-04-29 16:50:42
 * @Description: 值的解构赋值 值交换（不需要第三个中间值）
 * 
 */
let a = 1;
let b = 2;
// let temp = a;  // 内存消失
// a = b;
// b = temp;
// console.log(a, b);  // 2 1

[a, b] = [b, a];
console.log(a, b);  // 2 1
