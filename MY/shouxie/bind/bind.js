/*
 * @Date         : 2022-06-09 18:21:44
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-09 18:27:21
 * @description  :  bind函数
 */
// bind函数
// 1. 改变this指向
// 2. 第一个参数是this的值，后面的参数是 函数接收的参数的值
// 3. 返回值不变

function test(a,b,c){
    console.log(a,b,c);
    console.log('this',this);

    return '我是哈默';
}

// 普通执行
const res = test(1,10,100);

// 通过 bind 函数改变 this 指向
const boundTest = test.bind({name:'哈默'},7,77,777);

// 改变后执行 
const boundRes = boundTest();


// 返回值不变
console.log('res',res);
console.log('boundRes',boundRes);
