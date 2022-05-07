var obj = {
    hi() {
        // this对象方法调用 obj
        // 
        console.log(this);
        // 返回值是函数 ，高阶函数
        return () => {
            console.log(this);
        }
    },
    sayHi() {
        return function () {
            console.log(this);

            return () => {
                console.log(this);
            }
        }
    },
    say: () => {
        console.log(this);
    }
}

// const func = obj.hi;   // 赋值 obj.hi只打印外部的this
// func();   //

// 返回 箭头函数时 ， this->window
// const innerFunc = func();
// innerFunc();

// 返回 箭头函数时 ，this->obj
obj.hi()();