/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 20:53:18
 * @LastEditTime: 2022-04-25 21:04:42
 * @Description: 
 * 
 */
// const arr = (new Array(7)).fill([1, 2, 3, 4, 5, 6, 7]);
// const arr = (new Array(7)).fill([]);   // [] 每个都是新的吗？引用式赋值

// arr[0][0] = 1; // 为什么设置[0][0]=1,得到的全为1。引用赋值。
// console.log(arr);


// 初始化一个二维数组的时候？做法？
const arr = new Array(7);  // 7行
const len = arr.length;

for (let i = 0; i < len; i++) {
    arr[i] = []; // new Array()
}