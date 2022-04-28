<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-28 10:39:10
 * @LastEditTime: 2022-04-28 14:27:16
 * @Description: 异步编程的方法
 * 
-->

## 一、回调函数

- 如果f1是一个很耗时的任务，可以考虑改写f1，把f2写成f1的回调函数。
    ```js
    function f1(callback){
        setTimeout(function (){
            //todo....
            callback();
        },1000);
    }
    ```
- 执行
    ```js
    f1(f2);
    ```
- f1不会堵塞程序运行，相当于先执行程序的主要逻辑，将耗时的操作推迟执行。
> :angel:优点是**简单、容易理解和部署**，:anger:缺点是**不利于代码的阅读和维护**，各个部分之间高度耦合（Coupling），流程会很混乱，而且每个任务只能指定一个回调函数。


## 二、事件监听

- 事件驱动模式。任务的执行不取决于代码的顺序，而取决于某个事件是否发生。

    1. 为f1绑定一个事件。当f1发生done事件，就执行f2。
    2. f1.trigger('done')表示，执行完成后，立即触发done事件，从而开始执行f2。
        ```js
        function f1(){
            setTimeout(function (){
                //todo....
               f1.trigger('done');  //jQuery写法
            },1000);
        }
        ```

> :angel:优点是**比较容易理解**，**可以绑定多个事件**，每个事件可以**指定多个回调函数**，而且可以"**去耦合**"（Decoupling），有利于**实现模块化**。:anger:缺点是**整个程序都要变成事件驱动型**，运行流程会变得很不清晰。


## 三、发布/订阅

- *某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行*。这就叫做"*发布/订阅模式*"（publish-subscribe pattern），又称"*观察者模式*"（observer pattern）。

    1. f2向"信号中心"jQuery订阅"done"信号。
        ```js
        jQuery.subscribe("done", f2);  //jQuery
        ```
    2. f1进行改写,jQuery.publish("done")的意思是，f1执行完成后，向"信号中心"jQuery发布"done"信号，从而引发f2的执行。
        ```js
        function f1(){
            setTimeout(function (){
                //todo....
               jQuery.publish("done");  //jQuery写法
            },1000);
        }

        jQuery.unsubscribe("done", f2);  // f2完成执行后，也可以取消订阅。
        ```

> 👍比“事件监听”好，可以通过查看"消息中心"，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。



## 四、Promises对象

- Promises对象是CommonJS工作组提出的一种规范，目的是为异步编程提供统一接口。

- 每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。
    1. f1的回调函数f2
        ```js
        f1().then(f2);
        ```
    2. 这样写的优点在于，回调函数变成了链式写法，程序的流程可以看得很清楚，而且有一整套的配套方法，可以实现许多强大的功能。
        ```js
        // jQuery的实现
        function f1(){
            var dfd = $.Deferred();
            setTimeout(function (){
                // todo...
                dfd.resolve();
            },500);
            return dfd.promise;
        }

        // 指定多个回调函数
        f1().then(f2).then(f3);

        // 指定发生错误时的回调函数
        f1().then(f2).fail(f3);
        ```
> :100:比前三个多好处，如果一个任务已经完成，再添加回调函数，该回调函数会立即执行。所以，你不用担心是否错过了某个事件或信号。:anger:这种方法的缺点就是*编写和理解*，都相对比较难。


## 五、生成器Generators/ yield

- Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同，Generator 最大的特点就是可以控制函数的执行。

    1. 简单来说，Generator 函数是一个状态机，封装了多个内部状态。
    2. Generator 函数除了状态机，**还是一个遍历器对象生成函数**。
    3. **可暂停函数**, **yield可暂停**，**next方法可启动**，**每次返回的是yield后的表达式结果**。
    4. yield表达式本身没有返回值，或者说总是返回undefined。**next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值**。

        ```js
        function *foo(x) {
            let y = 2 * (yield (x + 1));
            let z = yield (y / 3);
            return (x + y + z);
        }
        let it = foo(5);
        console.log(it.next());   // => {value: 6, done: false}
        console.log(it.next(12)); // => {value: 8, done: false}
        console.log(it.next(13)); // => {value: 42, done: true}
        ```
        - :alien:首先 Generator 函数调用和普通函数不同，它会返回一个迭代器
        - :arrow_heading_down:当执行第一次 next 时，传参会被忽略，并且函数暂停在 yield (x + 1) 处，所以返回 5 + 1 = 6
        - :arrow_heading_down:当执行第二次 next 时，传入的参数12就会被当作上一个yield表达式的返回值，如果你不传参，yield 永远返回 undefined。此时 let y = 2 * 12，所以第二个 yield 等于 2 * 12 / 3 = 8
        - :arrow_heading_down:当执行第三次 next 时，传入的参数13就会被当作上一个yield表达式的返回值，所以 z = 13, x = 5, y = 24，相加等于 42


    ```js
    let fs = require('fs')
    function read(file) {
        return new Promise(function(resolve, reject) {
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) reject(err)
                    resolve(data)
            })
        })
    }
    function* r() {
        let r1 = yield read('./1.txt')
        let r2 = yield read(r1)
        let r3 = yield read(r2)
        console.log(r1)
        console.log(r2)
        console.log(r3)
    }
    let it = r()
    let { value, done } = it.next()
    value.then(function(data) { // value是个promise
        console.log(data) //data=>2.txt
        let { value, done } = it.next(data)
        value.then(function(data) {
            console.log(data) //data=>3.txt
            let { value, done } = it.next(data)
            value.then(function(data) {
                console.log(data) //data=>结束
            })
        })
    })
    // 2.txt=>3.txt=>结束
    ```
    - 手动迭代`Generator`函数很麻烦，`co`是一个为`Node.js`和浏览器打造的基于生成器的流程控制工具，借助于Promise，可以使用更加优雅的方式编写非阻塞代码。(安装`co`库只需`npm install co`)
        ```js
        function* r() {
            let r1 = yield read('./1.txt')
            let r2 = yield read(r1)
            let r3 = yield read(r2)
            console.log(r1)
            console.log(r2)
            console.log(r3)
        }
        let co = require('co')
        co(r()).then(function(data) {
            console.log(data)
        })
        // 2.txt=>3.txt=>结束=>undefined
        ```



## 六、async/await

- 使用async/await，你可以轻松地达成之前使用生成器和co函数所做到的工作。
    1. async/await是基于Promise实现的，它不能用于普通的回调函数。
    2. async/await与Promise一样，是非阻塞的。
    3. async/await使得异步代码看起来像同步代码，这正是它的魔力所在。
    - **一个函数如果加上 async ，那么该函数就会返回一个 Promise**
        ```js
        async function async1() {
            return "1";
        }
        console.log(async1()); // -> Promise {<resolved>: "1"}
        ```
    - Generator函数依次调用三个文件例子
        ```js
        let fs = require('fs')
            function read(file) {
                return new Promise(function(resolve, reject) {
                    fs.readFile(file, 'utf8', function(err, data) {
                        if (err) reject(err)
                            resolve(data)
                })
            })
        }
        async function readResult(params) {
            try {
                let p1 = await read(params, 'utf8')//await后面跟的是一个Promise实例
                let p2 = await read(p1, 'utf8')
                let p3 = await read(p2, 'utf8')
                console.log('p1', p1)
                console.log('p2', p2)
                console.log('p3', p3)
                return p3
                } catch (error) {
                    console.log(error)
                }
        }
        readResult('1.txt').then( // async函数返回的也是个promise
            data => {
                console.log(data)
            },
            err => console.log(err)
        )
        // p1 2.txt
        // p2 3.txt
        // p3 结束
        // 结束

        ```

- 如果请求两个文件，毫无关系，可以通过**并发请求**
    ```js
    let fs = require('fs')
    function read(file) {
        return new Promise(function(resolve, reject) {
            fs.readFile(file, 'utf8', function(err, data) {
                if (err) reject(err)
                    resolve(data)
            })
        })
    }
    function readAll() {
        read1()
        read2()//这个函数同步执行
    }
    async function read1() {
        let r = await read('1.txt','utf8')
        console.log(r)
    }
    async function read2() {
        let r = await read('2.txt','utf8')
        console.log(r)
    }
    readAll() // 2.txt 3.txt

    ```
- **async/await 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里**。

- async/await函数相对于Promise，:bell:**处理 then 的调用链，能够更清晰准确的写出代码**,:bell:**并且也能优雅地解决回调地狱问题**。:anger:缺点， await 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低，代码没有依赖性的话，完全可以使用 Promise.all 的方式。

- async/await函数对 Generator 函数的改进，:bell:**内置执行器，async 函数的执行，与普通函数一模一样，只要一行**。:bell:**更广的适用性，co 函数库约定，yield 命令后面只能是 Thunk 函数或 Promise 对象，而 async 函数的 await 命令后面，可以跟 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）**:bell:**更好的语义，async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。**







🥇[参考大佬的文章](https://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html)
🥇[参考大佬的文章](https://juejin.cn/post/6844903760280420366)
