/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-29 16:54:11
 * @LastEditTime: 2022-04-29 17:02:07
 * @Description: Math.floor()取小于等于的值
 * 
 */
const arr = [18, 'You', 777, 'breaking', 99, 'full'];
// console.log(Math.random())
// 随机取值
// console.log(arr[Math.floor(Math.random() * arr.length)]);

const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
console.log(random(arr));