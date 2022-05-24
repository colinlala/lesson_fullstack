/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-23 19:14:53
 * @LastEditTime: 2022-05-23 20:19:07
 * @Description: 转义前的文件
 */
const a = 1;  // es6   ie9以前  -ms   ,es6 -> es5
const s = Symbol();
const func = () => `aaa`;
{
    let b = 2;
}
// 大胆的使用新语法，转义后，兼容良好
// 工程化  文件模块化合并 ，es6转es5工具，babel

// 终端输入  .\node_modules\.bin\babel 1.js -o es5.js  转es5文件