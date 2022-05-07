<<<<<<< HEAD
// es6 reset 运算符
function sayHi(...args){


    console.log(args);   // 解构赋值         arguments（老，落伍）不要用

    // 函数里面有this，arguments
    // console.log(arguments);

    // this指向
    // 严格模式下   this没什么 undefined
    // 宿主环境下     window || global   
    //   手动绑定this
    console.log('Hello',this.name);
}




// 
let zyh = {
    name:'远野'
};

// sayHi();  // 普通函数调用

// sayHi也是对象  call方法
// 第一个参数  指定this，其余参数，交给函数本身作为参数
// sayHi.call(zyh,1,2,3);  // 让普通函数运行，但是指定this 指向 
=======
// es6 reset 运算符
function sayHi(...args){


    console.log(args);   // 解构赋值         arguments（老，落伍）不要用

    // 函数里面有this，arguments
    // console.log(arguments);

    // this指向
    // 严格模式下   this没什么 undefined
    // 宿主环境下     window || global   
    //   手动绑定this
    console.log('Hello',this.name);
}




// 
let zyh = {
    name:'远野'
};

// sayHi();  // 普通函数调用

// sayHi也是对象  call方法
// 第一个参数  指定this，其余参数，交给函数本身作为参数
// sayHi.call(zyh,1,2,3);  // 让普通函数运行，但是指定this 指向 
>>>>>>> 3060b42 (第一次Git提交所有文件)
sayHi.apply(zyh,[1,2,3]);  