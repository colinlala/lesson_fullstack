<<<<<<< HEAD
// call(thisObj , param1 , param2...)

// 手写call   方法
// 函数关键字 Function

Function.prototype.call2 = function(...args){
    // Function.prototype 对象
    // console.log('call2',thisObj,...args);
    let thisObj = args[0] ? args[0] :null;
    
    console.log(args.slice(1));

    // args.shift();
    // console.log(args);
    // let arr = 
} 
let zyh = {
    name:'远野'
};
function func(){

}
// call 第一个参数，等下是函数里面的this ，余下的参数交给call2
func.call2(zyh,1,2);
// console.log(func.__proto__);
// console.log(func instanceof Function);   // true   func是Function的实例
=======
// call(thisObj , param1 , param2...)

// 手写call   方法
// 函数关键字 Function

Function.prototype.call2 = function(...args){
    // Function.prototype 对象
    // console.log('call2',thisObj,...args);
    let thisObj = args[0] ? args[0] :null;
    
    console.log(args.slice(1));

    // args.shift();
    // console.log(args);
    // let arr = 
} 
let zyh = {
    name:'远野'
};
function func(){

}
// call 第一个参数，等下是函数里面的this ，余下的参数交给call2
func.call2(zyh,1,2);
// console.log(func.__proto__);
// console.log(func instanceof Function);   // true   func是Function的实例
>>>>>>> 3060b42 (第一次Git提交所有文件)
console.log(Function );