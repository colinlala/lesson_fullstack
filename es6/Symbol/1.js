/**
 * @author zzz
 */
// 独一无二的
// let s = Symbol();
// console.log(typeof s);




// let s3 = Symbol('foo');
// let s4 = Symbol('foo');
// console.log(s3 == s4)   // false
// console.log(s3)
// console.log(s4)

// let obj = {
//     name: 'zyh',
//     age: 22
// };


const o = require('./2')
console.log(o)
let s = Symbol('name')
// json 不允许同名的字符串式的key
// 如何向对象添加绝对不重复的key？ Symbol 唯一
let newObj = {
    ...o,
    [s]: 'www'
}
console.log(newObj)