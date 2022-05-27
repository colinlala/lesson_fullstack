/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-27 20:02:02
 * @LastEditTime: 2022-05-27 20:10:25
 * @Description: 
 */
// function sleep(t) {

// }
// js  通过同步任务的耗时，阻塞式的sleep
// java php等语言都有内置的sleep函数，js没有，单线程，脆弱，不允许有。
const t1 = + new Date();
console.log(t1);
while ((+ new Date()) - t1 <= 3000) {
    console.log('-----------')
}
console.log(+ new Date());
