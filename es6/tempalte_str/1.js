// 代码重复  违反了DRY  Dont Respect Yourself
const name = 'Snickers';
const age = 2;
// console.log('My Dog ' + name + ' is ' + age + ' yesrs old');
const age2 = 1;
const name2 = 'egg';
// console.log('My Dog ' + name2 + ' is ' + age2 + ' yesrs old');




// function sayMydog (name,age) {
//     // es6 提供字符串模板
//     // ``不是''
//     return `My dog  ${name}  is  ${age}  years old`;
//     // return 'My Dog ' + name2 + ' is ' + age2 + ' yesrs old';
// }
// console.log(sayMydog(name,age));



//  函数表达式  
// 首字母大写-----构造函数 
// 没有名字的函数 -----匿名函数
// const sayMydog = function(name,age) {
//     // es6 提供字符串模板
//     // ``不是''
//     return `My dog  ${name}  is  ${age}  years old`;
//     // return 'My Dog ' + name2 + ' is ' + age2 + ' yesrs old';
// }


// 箭头函数   不需要function 关键字 
// const sayMydog = (name,age) => {
//     // es6 提供字符串模板
//     // ``不是''
//     return `My dog  ${name}  is  ${age}  years old`;
//     // return 'My Dog ' + name2 + ' is ' + age2 + ' yesrs old';
// }


// 函数只有一句代码 并且是返回值的话 {}也可以省略
const sayMydog = (name,age) => `My dog  ${name}  is  ${age}  years old`;

console.log(sayMydog(name,age));


// function(){} 等价于 ()=>{}
// 箭头函数的使用带来的问题：
// 1）使用箭头函数，this的指向发生改变
// 2）使用箭头函数，arguments不能使用

// "fav(){}" 等价于"fav: function(){}"等价于"var fav=function(){}"
// "fav(){}" 就是定义一个名为fav的函数
// 总结：
// 使用对象的单体模式，对象单体模式就是一个函数
// 可以解决箭头函数this的指向和arguments不能使用的问题






