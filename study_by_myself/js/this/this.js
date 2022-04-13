// 1. 默认绑定规则：console.log(this === window);  // true
// 2. 隐式绑定规则：谁调用指向谁（隐式丢失：参数赋值）
// 3. 显示绑定：call，apply，bind（就是用来改变this指向）
// 4. new 绑定：




// this指向，只有在函数执行的时候，才能产生


// 1.

// 函数的独立调用
// this -> window
// function test(){
//     console.log(this === window);
// }
// test(); //  true




// 2.


// var a = 0;
// var obj = {
//     a:2,
//     foo:function(){
//         console.log(this);  // obj 

//         // function test(){
//         //     console.log(this);  //window
//         // }
//         // test();  //独立调用 所以this->window

//         // (function(){
//         //     console.log(this);
//         // })(); // 立即执行函数  一定 this->全局   浏览器：window  node：全局对象
        



//         // 闭包：当函数执行的时候，导致函数被定义，并抛出
//         // 闭包就是有权访问另一个函数内部变量的函数。

//         // 函数执行 obj.foo()
//         // 函数定义
//         function test(){
//             console.log(this);  //window
//         }
//         // 抛出
//         return test;  
//     }
  
// }


// obj.foo();  // 谁调用指向谁  obj

// // obj.foo() === test  因为返回值是test  所以obj.foo()()等同于test();   
// // 所以独立调用this->window
// obj.foo()();  //执行foo里面的test this->window(浏览器)





// 3.
 
// var a = 0;
// function foo(){
//     console.log(this);
// }

// var obj = {
//     a:2,
//     foo:foo
// }

// // obj.foo();  // 谁调用指向谁 this -> obj

// // 变量赋值
// // 隐式丢失：
// var bar = obj.foo;  // 右边obj.foo并没有执行函数，左边赋完值后与obj没有关系了
// bar();  // 函数执行 bar()等同于foo() , 所以独立调用 this -> window





// 4. 

// // 参数赋值
// var a = 0;
// function foo(){
//     console.log(this);   // window
// }
// function bar(fn){
//     fn();
// }
// var obj = {
//     a:2,
//     foo:foo,
// }

// // fn形参 obj.foo实参  实参被赋值为实参 （值拷贝的过程，浅拷贝）
// // 传入等同于foo(),所以独立调用 this->window
// bar(obj.foo); 




// 5.

// function foo(b){
//     this.a = b;
// }
// var obj1 = {};
// var bar = foo.bind(obj1);
// bar(2);

// console.log(obj1.a);    // this -> obj1   2
// var baz = new bar(3);
// console.log(obj1.a);    // this -> baz ,但是原本的值又没有变，赋完值与obj1无关   2

// console.log(baz.a);    // 3    new绑定的优先级比显示绑定高







// 6. 箭头函数

// 箭头函数对所有绑定规则不适用，它的this取决于父环境下的this。（=> 不存在this指向）

// （1）
// var a = 0;
// function foo(){
//     var that = this;
//     console.log(this);
//     // function test(){
//     //     console.log(this);
//     //     console.log(that);
//     // }

//     var test =()=>{
//         console.log(this);
//     }


//     test();
// }

// var obj = {
//     a:1,
//     foo:foo,
// }

// obj.foo();  // 外层的this -> obj  里面的this -> window




// （2）
// var a = 0;
// function foo(){
//     console.log(this);
//     // function test(){
//     //     console.log(this);
//     // }
//     var test =()=>{
//         // 箭头函数没有this ，拿父级作用域的this
//         console.log(this);
//     }
//     return test;
// }

// var obj1 = {
//     a:1,
//     foo:foo,
// }
// var obj2 = {
//     a:2,
//     foo:foo,
// }
// var obj3 = {
//     a:2,
//     foo:()=>{
//         console.log(this);
//     }
// }

// obj1.foo()();   // this->obj1 默认绑定规则（独立调用对箭头函数）无效


// 正常情况下（普通函数）this->obj2
// var bar = foo().call(obj2);  // 外面里面都this->window 显示绑定无效

// 正常情况下（普通函数）this->obj3
// obj3.foo(); // this->window 隐式绑定无效，箭头函数没有this，往父级作用域找this，父级this->window




// var foo = ()=>{
//     console.log(this);
// }
// new foo(); // 箭头函数不允许作为构造函数使用