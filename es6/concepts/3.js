// 'use strict';

// 箭头函数的时候，普通函数调用，没有this和prototype
console.log(this);// 通过作用域链查到的this
let b =2;
const func = a =>{
    console.log(this); // node下{}  浏览器下window
    return a + b;
}
// console.log(func(1))


const funca = () =>{
    
}

// funca is not constructor
let o = new funca();