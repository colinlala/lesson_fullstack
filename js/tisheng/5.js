// 同步代码 瞬间执行完
// 解释的问题出来了？ 同步代码都会跟看到的不一样
// 变量提升
// 执行栈  2个阶段
// 1.编译阶段    很快的执行完
// 2.代码的执行阶段   a已经提前完成了声明，变量提升
// js中变量 独立存在的，变量类型由值决定，在特定的作用域下声明
// 作用域 优先于变量存在的  全局作用域 在执行栈中执行时
// 变量提升
// 在js 中要使用到变量  就需要到相应的作用域找出来

a = 1;
var a;   // 申明了a   undefined
console.log(a); // undefined? 1