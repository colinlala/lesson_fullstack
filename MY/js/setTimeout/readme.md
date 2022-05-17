<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-17 10:27:14
 * @LastEditTime: 2022-05-17 11:23:52
 * @Description: setTimeout
-->
- `setInterval()`和`setTimeout()`可以接收两个参数，**可以有多个参数**
    1. 第一个参数是需要回调的函数，必须传入的参数
    2. 第二个参数是时间间隔，毫秒数，可以省略。
    3. 第三个参数是表示传入回调函数的参数。
        ```js
        setTimeout(function(a,b){
            console.log(0+a+b);//这里打印的是：7
        },1000,3,4);
        ```
        > **注意：IE 9.0及以下版本，只允许setTimeout有两个参数，不支持更多的参数**

- `setTimeout`函数，返回一个表示计数器编号的整数值`timeoutID`，将该整数传入`clearTimeout`函数，就可以取消对应的定时器。


- `this`指向：setTimeout函数是属于window的

## 面试题：setTimeout()之延迟时间为0
    ```js
    console.log('a');
    setTimeout(function(){
        console.log('b');
    },0);
    console.log('c');
    console.log('d');
    // a
    // c
    // d
    // b
    ```
- ~~理论上他延迟时间为0不是应该马上执行吗，不是的~~。**`setTimeout`运行机制，必须要等到当前脚本的同步任务和“任务队列”中已有的事件，全部处理完以后，才会执行setTimeout指定的任务**。


- **`setTimeout`的真正作用是，在“任务队列”的现有事件的后面再添加一个事件，规定在指定时间执行某段代码。`setTimeout`添加的事件，会在下一次`Event Loop`执行**。


- ***`setTimeout`的意思是传递一个函数，延迟一段时间把该函数添加到队列中，并不是立即执行***。

## 面试题：setTimeout函数之循环和闭包

    ```js
    for (var i = 1; i <= 5; i++) {
        setTimeout( function timer(){
            console.log(i);
        },i*1000);
    }
    ```
- ~~for循环第一次时延迟一秒输出1，然后延迟两秒输出2...~~

- *运行时会以每秒一次的频率输出五次6*
    1. **每秒一次**：刚进入for循环的时候，i为1,所以相对于现在延迟一秒将timer函数添加到队列当中，然后for循环还要继续，并没有等一秒再继续循环，然后进行第二次循环，这时候i为2,所以相对于现在延迟两秒将timer函数送进队列。以此类推。for循环的时间忽略不计的话，timer函数就以每秒一次的频率执行。
    2. **每次都显示6**：与异步和闭包都有关系。闭包（对函数类型的值进行传递时，保留对它被声明的位置所处的作用域的引用），timer函数是在setTimeout函数中被声明的，执行console.log(i)的时候，没有i的声明，继续向外层的作用域找，终于在全局作用域下找到了i为多少了。var的声明的i在for的外面。**当timer函数第一次执行的时候，在执行console.log(i)的时候，这个时候的i其实是全局作用域下的i，这个时候循环是已经结束了，这时候i为6**。

- **怎么改动上面的代码让结果依次为1,2,3,4,5呢？**
    1. 最简单的办法var改let，let创建了块作用域。
    2. **用立即执行函数表达式创造了新的函数作用域将timer函数包裹了起来，并用j捕获了每次循环时的i**，这样在运行到console.log(j)的时候显示的就是每次循环时的i值。
        ```js
        for (var i = 1; i <= 5; i++) {
            (function() {
                var j = i;
                setTimeout( function timer() {
                    console.log(j);
                },i*1000 ); 
            })();
        }
        ```
    3. 直接捕获循环的i
        ```js
        for (var i = 1; i <= 5; i++) {
            let j = i;
            setTimeout(function timer() {
                console.log(j);
            },j*1000);
        }
        ```