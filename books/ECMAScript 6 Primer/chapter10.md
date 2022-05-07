<<<<<<< HEAD
# 对象的扩展


## 属性的简洁表示法

    ```
    const foo = 'bar';
    const baz = {foo};
    baz // {foo: "bar"}

    // 等同于
    const baz = {foo: foo};

    // 变量foo直接写在大括号里面。这时，属性名就是变量名, 属性值就是变量值。
    ```

- 用于函数的返回值
- CommonJS 模块输出一组变量
    ```
    module.exports = { getItem, setItem, clear };
    // 等同于
    module.exports = {
        getItem: getItem,
        setItem: setItem,
        clear: clear
    };
    ```
> 注意，简写的对象方法不能用作构造函数，会报错。
    ```
    const obj = {
        f() {
            this.foo = 'bar';
        }
    };
    new obj.f() // 报错
    ```


## 属性名表达式

- JavaScript 定义对象的属性

    ```
    // 方法一  用标识符作为属性名
    obj.foo = true;

    // 方法二  用表达式作为属性名
    obj['a' + 'bc'] = 123;
    ```


- 表达式还可以用于定义方法名。

- 属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]
    ```
    const keyA = {a: 1};
    const keyB = {b: 2};

    const myObject = {
        [keyA]: 'valueA',
        [keyB]: 'valueB'
    };

    myObject // Object {[object Object]: "valueB"}
    // [keyB]覆盖[keyA]
    ```


## 方法的name属性

- 返回函数名（即方法名）。

- 如果对象的方法使用了**取值函数（getter）和存值函数（setter）**，则name属性是在该方法的属性的描述对象的get和set属性上面，返回值是方法名前加上get和set。

- 对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。

    ```
    const key1 = Symbol('description');
    const key2 = Symbol();
    let obj = {
        [key1]() {},
        [key2]() {},
    };
    obj[key1].name // "[description]"
    obj[key2].name // ""
    ```

## 属性的可枚举性和遍历

1. 可枚举性

    - 对象的每个属性都有一个描述对象（Descriptor），Object.getOwnPropertyDescriptor()可获取.
        > 描述对象的**enumerable**属性，称为“可枚举性”，如果该属性为false，就表示某些操作会忽略当前属性。最初目的,让某些属性可以规避掉for...in操作，不然所有内部属性和方法都会被遍历到。


        > 只有for...in会返回继承的属性,Object.keys(),JSON.stringify(),Object.assign()都忽略。


    - ES6 规定，所有 Class 的原型的方法都是不可枚举的。尽量不要用for...in循环，而用Object.keys()代替。

2. 属性的遍历

    - for...in循环遍历对象自身的和**继承**的可枚举属性
    - Object.keys返回一个数组，包括对象自身的所有可枚举属性的键名。
    - Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性的键名。
    - Object.getOwnPropertySymbols返回一个数组，包含对象**自身的所有 Symbol 属性**的键名。
    - Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。


    > 按照同样的遍历次序规则 ： 

        1. 首先遍历所有数值键，按照数值升序排列。  
        2. 其次遍历所有字符串键，按照加入时间升序排列。  
        3. 最后遍历所有 Symbol 键，按照加入时间升序排列。


            ```
            Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
            // ['2', '10', 'b', 'a', Symbol()]
            ```  


3. super关键字

    - this关键字总是指向函数所在的当前对象，类似的关键字super，**指向当前对象的原型对象**。

    - super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。

    - super.foo等同于Object.getPrototypeOf(this).foo（属性）或Object.getPrototypeOf(this).foo.call(this)（方法）。


        ```
        const proto = {
            x: 'hello',
            foo() {
                console.log(this.x);
            },
        };
        const obj = {
            x: 'world',
            foo() {
                super.foo();
            }
        }
        Object.setPrototypeOf(obj, proto);
        obj.foo() // "world"

        //super.foo指向原型对象proto的foo方法，但是绑定的this却还是当前对象obj，因此输出的就是world。
        ```



## 对象的扩展运算符

1. 解构赋值
    - 解构赋值必须是最后一个参数，否则会报错。

    > ***浅拷贝***,如果一个键的值是复合类型的值（数组、对象、函数）、那么解构赋值拷贝的是这个值的引用，而不是这个值的副本。

    - 不能复制继承自原型对象的属性。

2. 扩展运算符

    - 如果扩展运算符后面不是对象，则会自动将其转为对象。

    - 如果扩展运算符后面是字符串，它会自动转成一个类似数组的对象。

    - 对象的扩展运算符，只会返回参数对象自身的、可枚举的属性

    ```
    let aClone = { ...a };
    // 等同于
    let aClone = Object.assign({}, a);

    let ab = { ...a, ...b };
    // 等同于
    let ab = Object.assign({}, a, b);
    ```
    - 完整克隆一个对象，还拷贝对象原型的属性:
        ```
        // 写法一     __proto__属性在非浏览器的环境不一定部署
        const clone1 = {
            __proto__: Object.getPrototypeOf(obj),
            ...obj
        };
        // 写法二
        const clone2 = Object.assign(
            Object.create(Object.getPrototypeOf(obj)),
            obj
        );

        // 写法三
        const clone3 = Object.create(
            Object.getPrototypeOf(obj),
            Object.getOwnPropertyDescriptors(obj)
        )
        ```

    - 如果用户自定义的属性，**放在扩展运算符后面**，则扩展运算符内部的同名属性会被覆盖掉。

    - 如果把自定义属性**放在扩展运算符前面**，就变成了设置新对象的默认属性值。

    - 对象的扩展运算符后面可以跟表达式。

    - 扩展运算符的参数对象之中，如果有取值函数get，这个函数是会执行的。



## 错误对象AggregateError

- 为了配合新增的Promise.any()方法,引入一个新的错误对象AggregateError

- AggregateError 在一个错误对象里面，封装了多个错误。

- AggregateError 本身是一个构造函数，用来生成 AggregateError 实例对象。
    ```
    AggregateError(errors[, message])
    ```
    1. errors：数组，它的每个成员都是一个错误对象。该参数是必须的。
=======
# 对象的扩展


## 属性的简洁表示法

    ```
    const foo = 'bar';
    const baz = {foo};
    baz // {foo: "bar"}

    // 等同于
    const baz = {foo: foo};

    // 变量foo直接写在大括号里面。这时，属性名就是变量名, 属性值就是变量值。
    ```

- 用于函数的返回值
- CommonJS 模块输出一组变量
    ```
    module.exports = { getItem, setItem, clear };
    // 等同于
    module.exports = {
        getItem: getItem,
        setItem: setItem,
        clear: clear
    };
    ```
> 注意，简写的对象方法不能用作构造函数，会报错。
    ```
    const obj = {
        f() {
            this.foo = 'bar';
        }
    };
    new obj.f() // 报错
    ```


## 属性名表达式

- JavaScript 定义对象的属性

    ```
    // 方法一  用标识符作为属性名
    obj.foo = true;

    // 方法二  用表达式作为属性名
    obj['a' + 'bc'] = 123;
    ```


- 表达式还可以用于定义方法名。

- 属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]
    ```
    const keyA = {a: 1};
    const keyB = {b: 2};

    const myObject = {
        [keyA]: 'valueA',
        [keyB]: 'valueB'
    };

    myObject // Object {[object Object]: "valueB"}
    // [keyB]覆盖[keyA]
    ```


## 方法的name属性

- 返回函数名（即方法名）。

- 如果对象的方法使用了**取值函数（getter）和存值函数（setter）**，则name属性是在该方法的属性的描述对象的get和set属性上面，返回值是方法名前加上get和set。

- 对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。

    ```
    const key1 = Symbol('description');
    const key2 = Symbol();
    let obj = {
        [key1]() {},
        [key2]() {},
    };
    obj[key1].name // "[description]"
    obj[key2].name // ""
    ```

## 属性的可枚举性和遍历

1. 可枚举性

    - 对象的每个属性都有一个描述对象（Descriptor），Object.getOwnPropertyDescriptor()可获取.
        > 描述对象的**enumerable**属性，称为“可枚举性”，如果该属性为false，就表示某些操作会忽略当前属性。最初目的,让某些属性可以规避掉for...in操作，不然所有内部属性和方法都会被遍历到。


        > 只有for...in会返回继承的属性,Object.keys(),JSON.stringify(),Object.assign()都忽略。


    - ES6 规定，所有 Class 的原型的方法都是不可枚举的。尽量不要用for...in循环，而用Object.keys()代替。

2. 属性的遍历

    - for...in循环遍历对象自身的和**继承**的可枚举属性
    - Object.keys返回一个数组，包括对象自身的所有可枚举属性的键名。
    - Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性的键名。
    - Object.getOwnPropertySymbols返回一个数组，包含对象**自身的所有 Symbol 属性**的键名。
    - Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。


    > 按照同样的遍历次序规则 ： 

        1. 首先遍历所有数值键，按照数值升序排列。  
        2. 其次遍历所有字符串键，按照加入时间升序排列。  
        3. 最后遍历所有 Symbol 键，按照加入时间升序排列。


            ```
            Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
            // ['2', '10', 'b', 'a', Symbol()]
            ```  


3. super关键字

    - this关键字总是指向函数所在的当前对象，类似的关键字super，**指向当前对象的原型对象**。

    - super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。

    - super.foo等同于Object.getPrototypeOf(this).foo（属性）或Object.getPrototypeOf(this).foo.call(this)（方法）。


        ```
        const proto = {
            x: 'hello',
            foo() {
                console.log(this.x);
            },
        };
        const obj = {
            x: 'world',
            foo() {
                super.foo();
            }
        }
        Object.setPrototypeOf(obj, proto);
        obj.foo() // "world"

        //super.foo指向原型对象proto的foo方法，但是绑定的this却还是当前对象obj，因此输出的就是world。
        ```



## 对象的扩展运算符

1. 解构赋值
    - 解构赋值必须是最后一个参数，否则会报错。

    > ***浅拷贝***,如果一个键的值是复合类型的值（数组、对象、函数）、那么解构赋值拷贝的是这个值的引用，而不是这个值的副本。

    - 不能复制继承自原型对象的属性。

2. 扩展运算符

    - 如果扩展运算符后面不是对象，则会自动将其转为对象。

    - 如果扩展运算符后面是字符串，它会自动转成一个类似数组的对象。

    - 对象的扩展运算符，只会返回参数对象自身的、可枚举的属性

    ```
    let aClone = { ...a };
    // 等同于
    let aClone = Object.assign({}, a);

    let ab = { ...a, ...b };
    // 等同于
    let ab = Object.assign({}, a, b);
    ```
    - 完整克隆一个对象，还拷贝对象原型的属性:
        ```
        // 写法一     __proto__属性在非浏览器的环境不一定部署
        const clone1 = {
            __proto__: Object.getPrototypeOf(obj),
            ...obj
        };
        // 写法二
        const clone2 = Object.assign(
            Object.create(Object.getPrototypeOf(obj)),
            obj
        );

        // 写法三
        const clone3 = Object.create(
            Object.getPrototypeOf(obj),
            Object.getOwnPropertyDescriptors(obj)
        )
        ```

    - 如果用户自定义的属性，**放在扩展运算符后面**，则扩展运算符内部的同名属性会被覆盖掉。

    - 如果把自定义属性**放在扩展运算符前面**，就变成了设置新对象的默认属性值。

    - 对象的扩展运算符后面可以跟表达式。

    - 扩展运算符的参数对象之中，如果有取值函数get，这个函数是会执行的。



## 错误对象AggregateError

- 为了配合新增的Promise.any()方法,引入一个新的错误对象AggregateError

- AggregateError 在一个错误对象里面，封装了多个错误。

- AggregateError 本身是一个构造函数，用来生成 AggregateError 实例对象。
    ```
    AggregateError(errors[, message])
    ```
    1. errors：数组，它的每个成员都是一个错误对象。该参数是必须的。
>>>>>>> 3060b42 (第一次Git提交所有文件)
    2. message：字符串，表示 AggregateError 抛出时的提示信息。该参数是可选的。