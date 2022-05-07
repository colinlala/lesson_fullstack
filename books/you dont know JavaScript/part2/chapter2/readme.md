# this全面解析


- 分析调用位置

1. 默认绑定规则：console.log(this === window);  // true

2. 隐式绑定规则：谁调用指向谁（隐式丢失：参数赋值）

    ```
    // 隐式绑定
    function foo() {
        console.log( this.a );
    }
    var obj = {
        a: 2,
        foo: foo
    };
    obj.foo(); // 2


    // 隐式丢失
    function foo() {
        console.log( this.a );
    }
    var obj = {
        a: 2,
        foo: foo
    };
    var bar = obj.foo; // 函数别名！
    var a = "oops, global"; // a 是全局对象的属性
    bar(); // "oops, global"
    // bar = obj.foo 等同于 foo函数，bar() 等同于 foo(),（默认绑定），this->window


    // 隐式丢失 回调函数
    function foo() {
        console.log( this.a );
    }
    function doFoo(fn) {
        // fn 其实引用的是 foo
        fn(); // <-- 调用位置！
    }
    var obj = {
        a: 2,
        foo: foo
    };
    var a = "oops, global"; // a 是全局对象的属性
    doFoo( obj.foo ); // "oops, global"
    // obj.foo 等同于 foo函数，foo(),（默认绑定），this->window
    ```

3. 显示绑定：call，apply，bind（就是用来改变this指向）

4. new 绑定：

