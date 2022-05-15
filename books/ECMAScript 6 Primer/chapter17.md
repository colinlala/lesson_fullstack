# Promise 对象

## 1. Promise

- Promise 是异步编程的一种解决方案，比传统的解决方案（回调函数和事件）更合理和更强大。

- `Promise`，简单来说就是一个容器，里面保存着某个未来才会结束的事件（异步操作）的结果。（Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。）

- `Promise`特点：
    1. **对象的状态不受外界影响**。`Promise`对象代表一个异步操作，三种状态：
        1. `pending`（进行中）
        2. `fulfilled`（已成功）
        3. `rejected`（已失败）
        - 异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
    2. **一旦状态改变，就不会再变，任何时候都可以得到这个结果**。`Promise`对象的状态改变：
        1. `pending`变为`fulfilled`
        2. `pending`变为`rejected`
        - 会一直保持这个结果（resolved已定型），改变发生再对`Promise`对象添加回调函数，也会得到结果（事件Event-如果错过了，再去监听就啥也没有了）。


- `Promise`缺点：
    1. 无法取消`Promise`，一旦新建它就会立即执行，无法中途取消。
    2. 不设置回调函数，`Promise`内部抛出的错误，不会反应到外部。
    3. 处于`pending`状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

## 2. 用法

- `Promise`对象是一个构造函数，用来生成`Promise`实例。
    ```js
    const promise = new Promise(function(resolve, reject) {
    // ... some code
        if (/* 异步操作成功 */){
            resolve(value);
        } else {
            reject(error);
        }
    });
    ```
    - `resolve`和`reject`是两个函数，不用部署。
        1. `resolve`：将`Promise`对象的状态从`pending`变为`resolve`（成功），在异步操作**成功**时调用，并将异步操作的结果，传递出去。
        2. `reject`：将`Promise`对象的状态从`pending`变为`reject`（失败），在异步操作**失败**时调用，并将异步操作的结果，传递出去。

-  `Promise`实例用`then`方法分别指定`resolved`状态和`rejected`状态的回调函数。
    ```js
    promise.then(function(value) {
        // success
    }, function(error) {
        // failure
    });
    // 这种写法不好
    ```
    - then方法可以接受两个回调函数作为参数（都可选）
        1. 第一个回调函数是`Promise`对象变为`resolved`时调用
        2. 第二个回调函数是`Promise`对象变为`rejected`时调用

- `Promise`新建后就会立即执行。
    ```js
    let promise = new Promise(function(resolve, reject) {
        console.log('Promise');
        resolve();
    });
    promise.then(function() {
        console.log('resolved.');
    });
    console.log('Hi!');
    // Promise
    // Hi!
    // resolved
    ```
    - *所以首先输出的是Promise。然后，**then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行**，所以resolved最后输出*。

- 实现Ajax操作
    ```js
    const getJSON = function(url) {
        const promise = new Promise(function(resolve, reject){
            const handler = function() {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            const client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = "json";
            client.setRequestHeader("Accept", "application/json");
            client.send();
        });
        return promise;
    };
    getJSON("/posts.json").then(function(json) {
        console.log('Contents: ' + json);
    }, function(error) {
        console.error('出错了', error);
    });
    ```
    - `getJSON`是对 `XMLHttpRequest` 对象的封装，用于发出一个针对 `JSON` 数据的 `HTTP` 请求，并且返回一个`Promise`对象。需要注意的是，在`getJSON`内部，`resolve`函数和`reject`函数调用时，都带有参数。

- `resolve`函数的参数除了正常的值以外，还可能是另一个 `Promise` 实例（resolve(p1);），此时p1的状态决定了这个`promise`对象的状态。如果是`pending`则等待改变，否则立即执行。

    ```js
    const p1 = new Promise(function (resolve, reject) {
        setTimeout(() => reject(new Error('fail')), 3000)
    });
    const p2 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(p1), 1000)
    });
    p2
        .then(result => console.log(result))
        .catch(error => console.log(error))
    // Error: fail
    ```
    - `p1`是一个 `Promise`，3 秒之后变为`rejected`。`p2`的状态在 1 秒之后改变，`resolve`方法返回的是`p1`。由于`p2`返回的是另一个 `Promise`，导致`p2`自己的状态无效了。所以，后面的`then`语句都变成针对后者（`p1`）。又过了 2 秒，`p1`变为`rejected`，导致触发`catch`方法指定的回调函数。

- `reject`函数的参数通常是`Error`对象的实例，表示抛出的错误


- 调用`resolve`或`reject`并不会终结 `Promise` 的参数函数的执行。

    ```js
    new Promise((resolve, reject) => {
        resolve(1);
        console.log(2);
    }).then(r => {
        console.log(r);
    });
    // 2
    // 1
    ```
    - 调用`resolve(1)`以后，后面的`console.log(2)`还是会执行，并且会首先打印出来。这是**因为立即 resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务**。



## 3. Promise.prototype.then()

- 采用链式的`then`，可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还是一个`Promise`对象（即有异步操作），这时后一个回调函数，就会等待该`Promise`对象的状态发生变化，才会被调用。
    ```js
    getJSON("/post/1.json").then(
        post => getJSON(post.commentURL)
    ).then(
        comments => console.log("resolved: ", comments),
        err => console.log("rejected: ", err)
    );
    ```
    - 第一个`then`方法指定的回调函数，返回的是另一个`Promise`对象。这时，第二个`then`方法指定的回调函数，就会等待这个新的`Promise`对象状态发生变化。如果变为`resolved`，就调用第一个回调函数，如果状态变为`rejected`，就调用第二个回调函数。


## 4. Promise.prototype.catch()

- `.then(null, rejection)`或`.then(undefined, rejection)`的别名，用于**指定发生错误时的回调函数**。

    - 如果异步操作抛出错误，状态就会变为`rejected`，就会调用`catch()`方法指定的回调函数，处理这个错误。另外，`then()`方法指定的回调函数，如果运行中抛出错误，也会被`catch()`方法捕获。
        ```js
        p.then((val) => console.log('fulfilled:', val))
        .catch((err) => console.log('rejected', err));
        // 等同于
        p.then((val) => console.log('fulfilled:', val))
        .then(null, (err) => console.log("rejected:", err));
        ```
    - `promise`抛出一个错误，就被`catch()`方法指定的回调函数捕获。
        ```js
        const promise = new Promise(function(resolve, reject) {
            throw new Error('test');
        });
        promise.catch(function(error) {
            console.log(error);
        });// Error: test
        
        // 写法一
        const promise = new Promise(function(resolve, reject) {
            try {
                throw new Error('test');
            } catch(e) {
                reject(e);
            }
        });
        promise.catch(function(error) {
            console.log(error);
        });

        // 写法二
        const promise = new Promise(function(resolve, reject) {
            reject(new Error('test'));
        });
        promise.catch(function(error) {
            console.log(error);
        });
        ```

- `Promise` 状态已经变成`resolved`，再抛出错误是无效的。
    ```js
    const promise = new Promise(function(resolve, reject) {
        resolve('ok');
        throw new Error('test');
    });
    promise
        .then(function(value) { console.log(value) })
        .catch(function(error) { console.log(error) });
    // ok
    // Promise 在resolve语句后面，再抛出错误，不会被捕获，等于没有抛出。因为 Promise 的状态一旦改变，就永久保持该状态，不会再变了。
    ```

- `Promise` 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。

- 不要在`then()`方法里面定义 Reject 状态的回调函数（即`then`的第二个参数），总是使用`catch`方法。
    ```js
    // 不好
    promise
        .then(function(data) {
            // success
        }, function(err) {
            // error
    });

    // good
    promise
        .then(function(data) { //cb
            // success
        })
        .catch(function(err) {
            // error
        });
    ```
    - 第二种写法可以捕获前面`then`方法执行中的错误，也更接近同步的写法（`try/catch`）。因此，**建议总是使用`catch()`方法，而不使用`then()`方法的第二个参数**。


- **“Promise 会吃掉错误”**，如果没有使用`catch()`方法指定错误处理的回调函数，`Promise` 对象抛出的错误不会传递到外层代码，即不会有任何反应(Promise 内部的错误不会影响到 Promise 外部的代码)。

    - 但是，Node.js 有一个`unhandledRejection`事件（可能会被废除），专门监听未捕获的`reject`错误，会触发这个事件的监听函数，可以在监听函数里面抛出错误。
        ```js
        process.on('unhandledRejection', function (err, p) {
            throw err;
        });
        ```
        - `unhandledRejection`事件的监听函数有两个参数，第一个是错误对象，第二个是报错的 Promise 实例，它可以用来了解发生错误的环境信息。

    - 如果 Promise 内部有未捕获的错误，会直接终止进程，并且进程的退出码不为 0。

- `Promise` 对象后面要跟`catch()`方法，这样可以处理 `Promise` 内部发生的错误。`catch()`方法返回的还是一个 `Promise` 对象，因此后面还可以接着调用`then()`方法。此时，`then()`报错，则与前面的`catch()`无关。


- `catch()`方法之中，还能再抛出错误。

    ```js
    // 第二个catch()方法用来捕获前一个catch()方法抛出的错误。
    someAsyncThing().then(function() {
        return someOtherAsyncThing();
    }).catch(function(error) {
        console.log('oh no', error);
        // 下面一行会报错，因为y没有声明
        y + 2;
    }).catch(function(error) {
        console.log('carry on', error);
    });
    // oh no [ReferenceError: x is not defined]
    // carry on [ReferenceError: y is not defined]
    ```


## 5. Promise.prototype.finally()

- **指定不管 `Promise` 对象最后状态如何，都会执行的操作**。

    - 服务器使用 Promise 处理请求，然后使用`finally`方法关掉服务器。
        ```js
        server.listen(port)
        .then(function () {
            // ...
        })
        .catch(error => {...})
        .finally(server.stop);
        ```

- `finally`方法里面的操作，与状态无关的（不接受任何参数），不依赖于 `Promise` 的执行结果。

- `finally`方法总是会返回原来的值。


## 6. Promise.all()

- 将多个 `Promise` 实例，包装成一个新的 `Promise` 实例。
    ```js
    const p = Promise.all([p1, p2, p3]);
    ```
    - `Promise.all()`方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。

    - `p`的状态由`p1`、`p2`、`p3`决定：
        1. **`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`**，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数。
        2. **只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`**，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数。

            ```js
            const databasePromise = connectDatabase();
            const booksPromise = databasePromise.then(findAllBooks);
            const userPromise = databasePromise.then(getCurrentUser);
            Promise.all([
                    booksPromise,
                    userPromise
            ])
            .then(([books, user]) => pickTopRecommendations(books, user));
            ```
            - `booksPromise`和`userPromise`是两个异步操作，只有等到它们的结果都返回了，才会触发`pickTopRecommendations`这个回调函数。

- 作为参数的 Promise 实例，定义了catch方法，那么它一旦被`rejected`，并不会触发`Promise.all()`的`catch`方法。

## 7.Promise.race()

- 将多个 `Promise` 实例，包装成一个新的 `Promise` 实例。
    ```js
    const p = Promise.all([p1, p2, p3]);
    ```
    - **只要`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变**。那个率先改变的 `Promise` 实例的返回值，就传递给`p`的回调函数。

    ```js
    const p = Promise.race([
        fetch('/resource-that-may-take-a-while'),
        new Promise(function (resolve, reject) {
            setTimeout(() => reject(new Error('request timeout')), 5000)
        })
    ]);
    p
    .then(console.log)
    .catch(console.error);
    // 如果 5 秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。
    ```


## 8.Promise.allSettled()

- 用来**确定一组异步操作是否都结束了**（不管成功或失败）。

- `Promise.allSettled()`方法接受一个数组作为参数，数组的每个成员都是一个 `Promise` 对象，并返回一个新的 `Promise` 对象。**只有等到参数数组的所有 `Promise` 对象都发生状态变更（不管是`fulfilled`还是`rejected`），返回的 `Promise` 对象才会发生状态变更**。
    - 数组`promises`包含了三个请求，只有等到这三个请求都结束了（不管请求成功还是失败），`removeLoadingIndicator()`才会执行。
        ```js
        const promises = [
            fetch('/api-1'),
            fetch('/api-2'),
            fetch('/api-3'),
        ];
        await Promise.allSettled(promises);
        removeLoadingIndicator();
        ```

- **该方法返回的新的 `Promise` 实例，一旦发生状态变更，状态总是`fulfilled`，不会变成`rejected`**。状态变成`fulfilled`后，它的回调函数会接收到一个数组作为参数，该数组的每个成员对应前面数组的每个 `Promise` 对象。
    - `Promise.allSettled()`的返回值`allSettledPromise`，状态只可能变成`fulfilled`。它的回调函数接收到的参数是数组`results`。该数组的每个成员都是一个对象，对应传入`Promise.allSettled()`的数组里面的两个 Promise 对象。
        ```js
        const resolved = Promise.resolve(42);
        const rejected = Promise.reject(-1);
        const allSettledPromise = Promise.allSettled([resolved, rejected]);
        allSettledPromise.then(function (results) {
            console.log(results);
        });
        // [
        //    { status: 'fulfilled', value: 42 },
        //    { status: 'rejected', reason: -1 }
        // ]
        ```
    - `results`的每个成员是一个对象，对象的格式是固定的，对应异步操作的结果。
        ```js
        // 异步操作成功时
        {status: 'fulfilled', value: value}
        // 异步操作失败时
        {status: 'rejected', reason: reason}
        ```
        - 成员对象的`status`属性的值只可能是字符串`fulfilled`或`rejected`，用来区分异步操作是成功还是失败。如果是成功（`fulfilled`），对象会有`value`属性，如果是失败（`rejected`），会有`reason`属性。
            ```js
            const promises = [ fetch('index.html'), fetch('https://does-not-exist/') ];
            const results = await Promise.allSettled(promises);
            // 过滤出成功的请求
            const successfulPromises = results.filter(p => p.status === 'fulfilled');
            // 过滤出失败的请求，并输出原因
            const errors = results
                .filter(p => p.status === 'rejected')
                .map(p => p.reason);
            ```



## 9.Promise.any()

- 接受一组 `Promise` 实例作为参数，包装成一个新的 `Promise` 实例返回。
    - **只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态**。


- `Promise.any()`不会因为某个 `Promise`变成`rejected`状态而结束，必须等到所有参数 `Promise` 变成`rejected`状态才会结束。
    - `Promise.any()`方法的参数数组包含三个 `Promise` 操作。其中只要有一个变成`fulfilled`，`Promise.any()`返回的 `Promise` 对象就变成`fulfilled`。如果所有三个操作都变成`rejected`，那么`await`命令就会抛出错误。
        ```js
        const promises = [
            fetch('/endpoint-a').then(() => 'a'),
            fetch('/endpoint-b').then(() => 'b'),
            fetch('/endpoint-c').then(() => 'c'),
        ];
        try {
            const first = await Promise.any(promises);
            console.log(first);
        } catch (error) {
            console.log(error);
        }
        ```


- `Promise.any()`抛出的错误，不是一个一般的 Error 错误对象，而是一个 AggregateError 实例。它相当于一个数组，每个成员对应一个被`rejected`的操作所抛出的错误。
    ```js
    // AggregateError实例
    // new AggregateError() extends Array
    const err = new AggregateError();
    err.push(new Error("first error"));
    err.push(new Error("second error"));
    // ...
    throw err;


    var resolved = Promise.resolve(42);
    var rejected = Promise.reject(-1);
    var alsoRejected = Promise.reject(Infinity);
    Promise.any([resolved, rejected, alsoRejected]).then(function (result) {
        console.log(result); // 42
    });
    Promise.any([rejected, alsoRejected]).catch(function (results) {
        console.log(results); // [-1, Infinity]
    });
    ```

## 10.Promise.resolve()

- 需要将现有对象转为 `Promise` 对象
    - 将 jQuery 生成的deferred对象，转为一个新的 Promise 对象。
        ```js
        const jsPromise = Promise.resolve($.ajax('/whatever.json'));
        ```
    - 写法：
        ```js
        Promise.resolve('foo')
        // 等价于
        new Promise(resolve => resolve('foo'))
        ```
- 参数：
    1. *参数是一个 `Promise` 实例*：不做修改，原封不动返回实例。

    2. *参数是一个`thenable`对象*：`thenable`对象指的是具有`then`方法的对象。
        - 将这个对象转为 `Promise` 对象，然后就立即执行`thenable`对象的`then()`方法。
        ```js
        let thenable = {
            then: function(resolve, reject) {
                resolve(42);
            }
        };
        let p1 = Promise.resolve(thenable);
        p1.then(function (value) {
            console.log(value);  // 42
        });
        // thenable对象的then()方法执行后，对象p1的状态就变为resolved，从而立即执行最后那个then()方法指定的回调函数，输出42。
        ```
    3. *参数不是具有`then()`方法的对象，或根本就不是对象*：返回一个新的 `Promise` 对象，状态为`resolved`。
        ```js
        const p = Promise.resolve('Hello');
        p.then(function (s) {
            console.log(s)
        });
        // Hello
        // 字符串Hello不属于异步操作（判断方法是字符串对象不具有 then 方法），返回 Promise 实例的状态从一生成就是resolved，所以回调函数会立即执行。Promise.resolve()方法的参数，会同时传给回调函数。
        ```

    4. *不带有任何参数*：直接返回一个`resolved`状态的 `Promise` 对象。
        - 立即`resolve()`的 `Promise` 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。
            ```js
            setTimeout(function () {
                console.log('three');
            }, 0);
            Promise.resolve().then(function () {
                console.log('two');
            });
            console.log('one');
            // one
            // two
            // three
            // setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.resolve()在本轮“事件循环”结束时执行，console.log('one')则是立即执行，因此最先输出。
            ```


## 11.Promise.reject()

- `Promise.reject(reason)`方法也会返回一个新的 `Promise` 实例，该实例的状态为`rejected`。
    ```js
    const p = Promise.reject('出错了');
    // 等同于
    const p = new Promise((resolve, reject) => reject('出错了'))
    p.then(null, function (s) {
        console.log(s)
    });
    // 出错了
    // 生成一个 Promise 对象的实例p，状态为rejected，回调函数会立即执行。
    ```

- 方法的参数，会原封不动地作为`reject`的理由，变成后续方法的参数。
    ```js
    Promise.reject('出错了')
    .catch(e => {
        console.log(e === '出错了')
    })
    // true
    // 参数是一个字符串，后面catch()方法的参数e就是这个字符串。
    ```

## 12. 应用

1. 加载图片
    - 一旦加载完成，`Promise`的状态就发生变化。
        ```js
        const preloadImage = function (path) {
            return new Promise(function (resolve, reject) {
                const image = new Image();
                image.onload  = resolve;
                image.onerror = reject;
                image.src = path;
            });
        };
        ```

2. Generator 函数与 Promise 的结合 
    - 使用 Generator 函数管理流程，遇到异步操作的时候，通常返回一个`Promise`对象。
        ```js
        function getFoo () {
            return new Promise(function (resolve, reject){
                resolve('foo');
            });
        }

        const g = function* () {
            try {
                const foo = yield getFoo();
                console.log(foo);
            } catch (e) {
                console.log(e);
            }
        };

        function run (generator) {
            const it = generator();

            function go(result) {
                if (result.done) return result.value;

                return result.value.then(function (value) {
                    return go(it.next(value));
                }, function (error) {
                    return go(it.throw(error));
                });
            }
            go(it.next());
        }
        run(g);
        // Generator 函数g之中，有一个异步操作getFoo，它返回的就是一个Promise对象。函数run用来处理这个Promise对象，并调用下一个next方法。
        ```

## 13. Promise.try()

- 函数`f`是同步函数还是异步操作，但是想用 `Promise` 来处理它。因为这样就可以不管`f`是否包含异步操作，都用`then`方法指定下一步流程，用`catch`方法处理f抛出的错误。(缺点：如果`f`是同步函数，那么它会在本轮事件循环的末尾执行。)

- 让同步函数同步执行，异步函数异步执行：
    1. `async`函数：
        ```js
        const f = () => console.log('now');
        // async () => f()会吃掉f()抛出的错误。用promise.catch方法捕获错误。
        (async () => f())()
            .then(...)
            .catch(...);
        console.log('next');
        // now
        // next
        // 立即执行里面的async函数，因此如果f是同步的，就会得到同步的结果；如果f是异步的，就可以用then指定下一步，
        ```
    2. 使用`new Promise()`：
        ```js
        const f = () => console.log('now');
        (
            () => new Promise(
                resolve => resolve(f())
            )
        )();
        console.log('next');
        // now
        // next
        ```
- `Promise.try`方法可以替代上面的写法。
    ```js
    const f = () => console.log('now');
    Promise.try(f);
    console.log('next');
    // now
    // next
    ```
- `Promise.try`为所有操作提供了统一的处理机制，所以如果想用`then`方法管理流程，最好都用`Promise.try`包装一下。可以更好地管理异常。
    ```js
    function getUsername(userId) {
        return database.users.get({id: userId})
        .then(function(user) {
            return user.name;
        })
        .catch(...); // 如果抛出异步错误，可以用catch方法捕获
    }
    // database.users.get()返回一个 Promise 对象
    ```
    - 可能还会抛出同步错误，不得不用try...catch去捕获。但是很笨拙，统一用promise.catch()捕获所有同步和异步的错误。**`Promise.try`就是模拟`try`代码块，就像`promise.catch`模拟的是`catch`代码块**。
        ```js
        Promise.try(() => database.users.get({id: userId}))
            .then(...)
            .catch(...)
        ```