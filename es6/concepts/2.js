<<<<<<< HEAD
// 箭头函数   函数表达式
// 简化函数  function { } return
// 歧义  函数{}  对象字面量{}
// 箭头函数 只有一句代码  且是返回值
// 如果是对象的话
const func = a =>a; // 第一个a是参数（只有一个参数省略括号）
console.log(typeof func); // function


const funca = (a,b) =>({ val:a+b});
=======
// 箭头函数   函数表达式
// 简化函数  function { } return
// 歧义  函数{}  对象字面量{}
// 箭头函数 只有一句代码  且是返回值
// 如果是对象的话
const func = a =>a; // 第一个a是参数（只有一个参数省略括号）
console.log(typeof func); // function


const funca = (a,b) =>({ val:a+b});
>>>>>>> 3060b42 (第一次Git提交所有文件)
console.log(funca(1,2)); 