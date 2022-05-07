<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 20:11:16
 * @LastEditTime: 2022-04-25 20:26:16
 * @Description:
 *
 */
// 访问数组的元素？index
// arr[0]


// 遍历？
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const len = arr.length;
// for (let i = 0; i < arr.length; i++) {  //不推荐
// }


// 更快o(n)，更省
// for (let i = 0; i < len; i++) {  //性能好 ，代码面向机器
//     console.log(arr[i], i); //值  下标
// }



// let i = 0;
// for (let item of arr) {  // 可读更好 业务代码 es6代码可读性更好
//     console.log(item, i);
//     i++;  // 这样可以拿到下标
// }



// 遍历是数据结构的特定行为
// arr.forEach((item, index) => {
//     console.log(item, index);
// });



// arr.map((item, index) => {
//     console.log(item, index);// 升级版foreach
//     return item + 1;
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 20:11:16
 * @LastEditTime: 2022-04-25 20:26:16
 * @Description:
 *
 */
// 访问数组的元素？index
// arr[0]


// 遍历？
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const len = arr.length;
// for (let i = 0; i < arr.length; i++) {  //不推荐
// }


// 更快o(n)，更省
// for (let i = 0; i < len; i++) {  //性能好 ，代码面向机器
//     console.log(arr[i], i); //值  下标
// }



// let i = 0;
// for (let item of arr) {  // 可读更好 业务代码 es6代码可读性更好
//     console.log(item, i);
//     i++;  // 这样可以拿到下标
// }



// 遍历是数据结构的特定行为
// arr.forEach((item, index) => {
//     console.log(item, index);
// });



// arr.map((item, index) => {
//     console.log(item, index);// 升级版foreach
//     return item + 1;
>>>>>>> 3060b42 (第一次Git提交所有文件)
// })