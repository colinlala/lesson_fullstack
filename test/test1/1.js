/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-29 15:42:06
 * @LastEditTime: 2022-04-29 15:51:43
 * @Description: 进制数转换
 * 
 */
const num = 18; // 十进制
console.log(num.toString(2), typeof num.toString(2));  // 转成二进制 string
console.log(num.toString(8), typeof num.toString(8));  // 转成八进制 string
console.log(num.toString(16), typeof num.toString(16));  // 转成十六进制 string
console.log(typeof parseInt(num.toString(2)));  // 进制数转换成整数
console.log(typeof + num.toString(2));  // 进制数转换成整数
console.log(typeof Number(num.toString(2)));  // 进制数转换成整数

