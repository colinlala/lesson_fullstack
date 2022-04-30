/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-30 16:55:08
 * @LastEditTime: 2022-04-30 16:58:55
 * @Description:  \d匹配数字 \w匹配字母
 * 
 */
const reg = /1\d{10}/;
const reg2 = /\w{2}/;
console.log(reg.test('12345678901')); // true
console.log(reg2.test('22ab')); // true
