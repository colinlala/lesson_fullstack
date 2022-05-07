<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 15:23:04
 * @LastEditTime: 2022-04-26 17:22:53
 * @Description: 类型转换
 * 
 */
let a = 1231231231312312312312313123123123123131312312313123123123123123213; //number？
let b = 1231231231312312312312313123123123123131312312313123123123123123213n; //number？

// console.log(a + 1); // 数字太大 超出计数范围
// console.log(0.1 + 0.2); // 小数相加  js number没有特定的   数值类型   小数二进制表达有问题
console.log(typeof a);  // number
console.log(typeof b); // bigint

let bb = BigInt("12342345234243134123142525235345363464567546");
console.log(bb); // bigint 12342345234243134123142525235345363464567546n

console.log(b + bb);
console.log(1n + 2n);


console.log(5n / 2n);  // 计算不精准  bigint不能用/
// 不能混用
// console.log(5n + 1);   // Cannot mix BigInt and other types, use explicit conversions

console.log(+ new Date());  // + 类型转换  1650964703735 隐式类型转换
console.log(new Date());  //  2022-04-26T09:18:23.735Z


console.log(true + 1);
console.log("1" + 1); // 字符串类型优先  拼起来

console.log(5n + BigInt(1)); //强制类型转换


console.log(+ BigInt(1));  // bigint 不能隐式类型转换Cannot convert a BigInt value to a number

=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 15:23:04
 * @LastEditTime: 2022-04-26 17:22:53
 * @Description: 类型转换
 * 
 */
let a = 1231231231312312312312313123123123123131312312313123123123123123213; //number？
let b = 1231231231312312312312313123123123123131312312313123123123123123213n; //number？

// console.log(a + 1); // 数字太大 超出计数范围
// console.log(0.1 + 0.2); // 小数相加  js number没有特定的   数值类型   小数二进制表达有问题
console.log(typeof a);  // number
console.log(typeof b); // bigint

let bb = BigInt("12342345234243134123142525235345363464567546");
console.log(bb); // bigint 12342345234243134123142525235345363464567546n

console.log(b + bb);
console.log(1n + 2n);


console.log(5n / 2n);  // 计算不精准  bigint不能用/
// 不能混用
// console.log(5n + 1);   // Cannot mix BigInt and other types, use explicit conversions

console.log(+ new Date());  // + 类型转换  1650964703735 隐式类型转换
console.log(new Date());  //  2022-04-26T09:18:23.735Z


console.log(true + 1);
console.log("1" + 1); // 字符串类型优先  拼起来

console.log(5n + BigInt(1)); //强制类型转换


console.log(+ BigInt(1));  // bigint 不能隐式类型转换Cannot convert a BigInt value to a number

>>>>>>> 3060b42 (第一次Git提交所有文件)
