/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 19:10:26
 * @LastEditTime: 2022-04-26 21:44:27
 * @Description:
 *
 */

// 栈 数组
// 1.可以用数组实现
// 2.操作受限的数组，不自由，都有自己的特点
//          可以使用 push pop 完成增删的数组

// 栈？FILO
const stack = []; // 数组栈

stack.push('七个小矮人');
stack.push('可爱多');
stack.push('巧乐兹');
stack.push('冰工厂');
stack.push('光明奶砖');

// for (let i = stack.length - 1; i >= 0; i--) {
//     console.log(stack[i]);
// }
// 遍历  出栈
while (stack.length) {
    // const top = stack.pop();
    const top = stack[stack.length - 1];
    console.log('现在取出来的是', top);
    stack.pop();
}

