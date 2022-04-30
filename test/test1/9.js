/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-30 16:18:37
 * @LastEditTime: 2022-04-30 16:51:20
 * @Description: 正则表达式  str.math(regexp)把匹配到的显示出来
 * 
 */
var str = "123abc890ppp321";
// console.log(/^[0-9]{3}[a-z]{3}/g.test(str));
console.log(str.match(/[a-z]+/g)); //[ 'abc', 'ppp' ]
console.log(str.match(/^[0-9]+/));
console.log(str.match(/[0-9]+/g)); // [ '123', '890', '321' ]
console.log(str.replace(/([0-9]+)([a-z]+)/g, '----')); // --------321
str.replace(/([0-9]+)([a-z]+)/g, function () {
    // console.log(arguments);
    console.log(RegExp.$1)
    console.log(RegExp.$2)

});





