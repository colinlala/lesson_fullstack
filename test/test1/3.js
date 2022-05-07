<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-29 16:15:14
 * @LastEditTime: 2022-04-29 16:32:12
 * @Description:  ==先类型转换，再去比较、===类型也要求一样
 * 
 */
// == 类型转换 值相等就行 
console.log(0 == 0); // true
console.log(-0 == +0); // true
console.log(-0 === +0); // true
console.log(1 == '1'); // true 先类型转换'1'，再去比较
console.log(1 === '1'); // false
console.log(null == undefined); // true 同时转false
console.log(null === undefined); // false 
console.log({} == {}); // false  简单数据类型比较



=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-29 16:15:14
 * @LastEditTime: 2022-04-29 16:32:12
 * @Description:  ==先类型转换，再去比较、===类型也要求一样
 * 
 */
// == 类型转换 值相等就行 
console.log(0 == 0); // true
console.log(-0 == +0); // true
console.log(-0 === +0); // true
console.log(1 == '1'); // true 先类型转换'1'，再去比较
console.log(1 === '1'); // false
console.log(null == undefined); // true 同时转false
console.log(null === undefined); // false 
console.log({} == {}); // false  简单数据类型比较



>>>>>>> 3060b42 (第一次Git提交所有文件)
