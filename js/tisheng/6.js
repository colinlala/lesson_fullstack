// js 编译阶段  a 没有定义的
// console.log(a);  // error
// 变量提升是变量声明，赋值操作还是在执行阶段
console.log(b);  // 报错？undefined
var b = 2;