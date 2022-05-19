/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-19 14:39:11
 * @LastEditTime: 2022-05-19 15:22:11
 * @Description: 工作流
 */
// index.html 首页
// js 单点入口
// require属于node后端运行环境的关键字，不支持浏览器前端运行环境
// js 在不同运行环境下有差异
// 模块module化方案
// js 早期没有模块化方案。早期需求比较简单，不需要模块化
// commonJS 模块化方案  require + module.exports
// es 模块化方案  import from + export default

// 在输出后就结束了
var mod = require('./lib');    // require 关键字

console.log(mod.counter)   // 3   引入mod 3
mod.inCounter()  // ++counter
console.log(mod.counter)   // 3   引入mod 4


