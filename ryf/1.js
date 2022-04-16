let a = 1.236;
console.log(typeof a,0.1+0.2); // 浮点数运算先转二进制，然后在计算
console.log(typeof null);   // object js的bug前三位字符
console.log(typeof undefined);
console.log(typeof NaN,NaN==NaN);

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')


// a number 简单数据类型  不是对象
// a.toFixed 对象
// 在js中，基于对象(object-base)的语言
// 几乎所有东西都是对象
console.log(a.toFixed(2));  //1.24 取到小数 会四舍五入

var n1 = new Number(2);   // n1 object Number
console.log(typeof n1);