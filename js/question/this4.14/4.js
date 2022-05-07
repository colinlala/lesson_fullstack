// 1. 简单数据类型 除了null之外 结果都靠谱
// 32位 二进制
// null 类型前三位 000
// objext 类型前三位 000
// 所以typeof 分不出null和object
console.log(typeof null);  // null 简单数据类型  显示obj

// 判断一个变量是 null
const isNull = val => val === null;
console.log(isNull(null));




// 相同点？ 做if运算时a与b的效果一样
let a;
let b = null;
console.log(a == b);    //true
console.log(a === b);    //false


// NaN：非数字  但是是number类型
console.log(typeof NaN);    // number


// NaN 就是不等于 NaN
console.log(NaN == NaN);  // false


// number类型 ，但是要排斥NaN
const isNumber = val => typeof val === 'number' && val ===val;
