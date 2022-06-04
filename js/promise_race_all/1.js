/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-04 15:43:05
 * @LastEditTime: 2022-06-04 15:57:56
 * @Description: promise.all()
 */
// js 脚本 c c++ java 先编译成 .o .bin 然后再运行

// 1. Promise 构造函数会立即运行，第一个参数（函数）立即运行
// 2. p1  Promise { status：pending }
// 3. p1 的status无法从 pending -> fulfilled，除非执行resolve
const p1 = new Promise(r => console.log('立即打印'))
// p1.then(() => {
//     console.log('p1 解决了')
// })



// 如何让 Promise 构造函数不要立即运行