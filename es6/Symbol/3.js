let s = Symbol();   // 独一无二的
let s2 = Symbol();   // 独一无二的
console.log(s == s2)


let obj = {
    a: 1,
    [Symbol()]: function (arg) {
        console.log('----')
    },
    [Symbol()]: function (arg) {
        console.log('++++')
    }
}


console.log(obj.a)
console.log(obj)

console.log(Object.getOwnPropertySymbols(obj)) // [ Symbol(), Symbol() ]
console.log(Object.getOwnPropertyNames(obj))  // [ 'a' ]
console.log(Object.keys(obj))      //[ 'a' ] 遍历不到symbol类型的
console.log(Reflect.ownKeys(obj))  // [ 'a', Symbol(), Symbol() ]可以遍历到symbol类型的


Object.getOwnPropertySymbols(obj).forEach(item => {
    obj[item]();   // ----   ++++

})