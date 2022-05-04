// 包装  String('1')

// ‘1’调用底层的toString（）
console.log('1'.toString());
console.log(typeof '1');    // string
console.log(typeof new String('1'));  // object

let a = '1';
console.log(a.toString); // a被包装了一下，类型的转换 string
console.log(typeof a);    // a 回归 string


let b = new String('1');
console.log(b.toString());
console.log(typeof b);    // object

// js 长久以来的bug  32位系统 为了性能考虑 使用低位存储变量的类型
console.log(typeof null);    // object


// null 没有 NULL的包装类
// console.log(null.toString()) //报错

// console.log(undefined.toString()) //报错
