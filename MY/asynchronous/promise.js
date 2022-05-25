/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-25 14:48:49
 * @LastEditTime: 2022-05-25 15:11:40
 * @Description:异步解决方案一Promise
 */
// 输出顺序?
// const p = new Promise((resolve) => {
//     console.log('1-start');   // 同步代码
//     resolve('2-success');
// })
// p.then((value) => {
//     console.log(value);
// })
// console.log('3-end');   // 同步代码

// 1-start
// 3-end
// 2-success
// Promise新建后会立即执行，首先输出的是1-start
// 然后，then指定的回调函数，将在当前脚本所有的同步任务执行完才会执行，所以输出的是3-end
// 最后，输出resole的2-success
