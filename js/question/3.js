<<<<<<< HEAD
var obj = {
    hi:function(){
        console.log(this);   // 打印hi下的function？x 打印obj下的hi，sayHi,say
        return ()=>{
            console.log(this);   // 打印匿名函数？x 打印obj下的hi，sayHi,say
        }
    },
    sayHi:function(){
        return function(){
            console.log(this);  //打印function？x 全局
            return ()=>{
                console.log(this);   //打印匿名函数？勾
            }
        }
    },
    say:()=>{
        console.log(this);   //打印say下的匿名函数？x {}
    }
}

let sayHi = obj.sayHi();            //?
let fun1 = sayHi();                 //?
fun1();                             //?
let fun2 = sayHi.bind(obj)();        //?
=======
var obj = {
    hi:function(){
        console.log(this);   // 打印hi下的function？x 打印obj下的hi，sayHi,say
        return ()=>{
            console.log(this);   // 打印匿名函数？x 打印obj下的hi，sayHi,say
        }
    },
    sayHi:function(){
        return function(){
            console.log(this);  //打印function？x 全局
            return ()=>{
                console.log(this);   //打印匿名函数？勾
            }
        }
    },
    say:()=>{
        console.log(this);   //打印say下的匿名函数？x {}
    }
}

let sayHi = obj.sayHi();            //?
let fun1 = sayHi();                 //?
fun1();                             //?
let fun2 = sayHi.bind(obj)();        //?
>>>>>>> 3060b42 (第一次Git提交所有文件)
fun2();                         //?