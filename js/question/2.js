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

let hi = obj.hi();    //obj
hi();                   //obj
let sayHi = obj.sayHi();  //全局？
let fun1 = sayHi();   //全局？
fun1();                 //全局？
obj.say();              //{}？
