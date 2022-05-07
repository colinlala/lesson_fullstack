<<<<<<< HEAD
<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-02 14:12:00
 * @LastEditTime: 2022-05-02 16:56:34
 * @Description: 对象的新增方法
 * 
-->

# 对象的新增方法


## 一、Object.is()

- ES6 提出“Same-value equality”（同值相等）算法，与严格比较运算符（===）的行为基本一致。
    - 不同之处
        ```js
        +0 === -0 //true
        NaN === NaN // false

        Object.is(+0, -0) // false
        Object.is(NaN, NaN) // true
        ```
    > ES5 可以通过下面的代码，部署Object.is。
        ```js
        Object.defineProperty(Object, 'is', {
            value: function(x, y) {
                if (x === y) {
                // 针对+0 不等于 -0的情况
                return x !== 0 || 1 / x === 1 / y;
                }
                // 针对NaN的情况
                return x !== x && y !== y;
            },
            configurable: true,
            enumerable: false,
            writable: true
        });
        ```

## 二、Object.assign()

- Object.assign()方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。第一个参数是目标对象，后面的参数都是源对象。
    > 如果目标对象与源对象有**同名属性**，或多个源对象有**同名属性**，则后面的属性会覆盖前面的属性。
        ```js
        const target = { a: 1, b: 1 };
        const source1 = { b: 2, c: 2 };
        const source2 = { c: 3 };
        Object.assign(target, source1, source2);
        target // {a:1, b:2, c:3}
        ```
    > 如果该参数不是对象，则会**先转成对象**，然后返回。undefined和null无法转成对象，就会报错。

    > 如果非对象参数出现在源对象的位置（即**非首参数**）,就不会报错。


- 其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
    ```js
    const v1 = 'abc';
    const v2 = true;
    const v3 = 10;
    const obj = Object.assign({}, v1, v2, v3);
    console.log(obj); // { "0": "a", "1": "b", "2": "c" }
    // 只有字符串合入目标对象（以字符数组的形式），数值和布尔值都会被忽略。这是因为只有字符串的包装对象，会产生可枚举属性。
    ```

- 注意
    1. 浅拷贝。
    2. 同名属性的替换，处理方法是替换，而不是添加。
    3. 可以用来处理数组，但是会把数组视为对象。
        ```js
        Object.assign([1, 2, 3], [4, 5]);// [4, 5, 3]
        ```
    4. 只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。
         ```js
        const source = {
            get foo() { return 1 }
        };
        const target = {};
        Object.assign(target, source);// { foo: 1 }
        // source对象的foo属性是一个取值函数，Object.assign()不会复制这个取值函数，只会拿到值以后，将这个值复制过去。
        ```

- 常见用途
    1. 为对象添加属性
    2. 为对象添加方法
    3. 克隆对象
        ```js
        function clone(origin) {
            let originProto = Object.getPrototypeOf(origin);
            return Object.assign(Object.create(originProto), origin);
        }
        // 这样克隆原始对象自身的值，还克隆它继承的值。
        ```
    4. 合并多个对象
    5. 为属性指定默认值
        ```js
        const DEFAULTS = {
            url: {
                host: 'example.com',
                port: 7070
            },
        };
        function processContent(options) {
            options = Object.assign({}, DEFAULTS, options);
            console.log(options);
        }
        processContent({ url: {port: 8000} })
        // {
        //   url: {port: 8000}
        // }
        ```
        > 由于存在浅拷贝的问题，DEFAULTS对象和options对象的所有属性的值，最好都是简单类型，不要指向另一个对象。否则，DEFAULTS对象的该属性很可能不起作用。


## 三、Object.getOwnPropertyDescriptor()

- 返回指定对象所有自身属性（非继承属性）的描述对象。

- 解决Object.assign()无法正确拷贝get属性和set属性的问题。



## 四、__proto__属性、Object.setPrototypeOf()、Object.getPrototypeOf()

1. __proto__属性，用来读取或设置当前对象的原型对象（prototype）。如果一个对象本身部署了__proto__属性，该属性的值就是对象的原型。

2. Object.setPrototypeOf()，用来设置一个对象的原型对象（prototype），返回参数对象本身。
    - 由于undefined和null无法转为对象，所以如果第一个参数是undefined或null，就会报错。
    

3. Object.getPrototypeOf()，用于读取一个对象的原型对象。



## 五、Object.keys()、Object.values()、Object.entries()

1. Object.keys()，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
    ```js
    var obj = { foo: 'bar', baz: 42 };
    Object.keys(obj)    // ["foo", "baz"]
    ```

2. Object.values()，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。
    ```js
    const obj = { foo: 'bar', baz: 42 };
    Object.values(obj)    // ["bar", 42]
    ```

    - 过滤属性名为 **Symbol 值的属性**。
    - 如果参数是一个字符串，会返回各个字符组成的一个**数组**。
    - 如果参数不是对象，会先转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，会返回**空数组**。


3. Object.entries()，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
    ```js
    const obj = { foo: 'bar', baz: 42 };
    Object.entries(obj)    // [ ["foo", "bar"], ["baz", 42] ]
    ```

    - 过滤属性名为 **Symbol 值的属性**。
    - 将对象转为**真正的Map结构**。
        ```js
        const obj = { foo: 'bar', baz: 42 };
        const map = new Map(Object.entries(obj));
        map // Map { foo: "bar", baz: 42 }
        ```



## 六、Object.fromEntries()

- 是Object.entries()的逆操作，用于将一个键值对数组转为对象。
    ```js
    Object.fromEntries([
    ['foo', 'bar'],
    ['baz', 42]
    ])
    // { foo: "bar", baz: 42 }
    ```
> **因此特别适合将 Map 结构转为对象**。
    ```js
    // 例一
    const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
    ]);
    Object.fromEntries(entries)    // { foo: "bar", baz: 42 }

    // 例二
    const map = new Map().set('foo', true).set('bar', false);
    Object.fromEntries(map)    // { foo: true, bar: false }
    ```

- 配合URLSearchParams对象，将查询字符串转为对象。
    ```js
    Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
    // { foo: "bar", baz: "qux" }
=======
<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-02 14:12:00
 * @LastEditTime: 2022-05-02 16:56:34
 * @Description: 对象的新增方法
 * 
-->

# 对象的新增方法


## 一、Object.is()

- ES6 提出“Same-value equality”（同值相等）算法，与严格比较运算符（===）的行为基本一致。
    - 不同之处
        ```js
        +0 === -0 //true
        NaN === NaN // false

        Object.is(+0, -0) // false
        Object.is(NaN, NaN) // true
        ```
    > ES5 可以通过下面的代码，部署Object.is。
        ```js
        Object.defineProperty(Object, 'is', {
            value: function(x, y) {
                if (x === y) {
                // 针对+0 不等于 -0的情况
                return x !== 0 || 1 / x === 1 / y;
                }
                // 针对NaN的情况
                return x !== x && y !== y;
            },
            configurable: true,
            enumerable: false,
            writable: true
        });
        ```

## 二、Object.assign()

- Object.assign()方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。第一个参数是目标对象，后面的参数都是源对象。
    > 如果目标对象与源对象有**同名属性**，或多个源对象有**同名属性**，则后面的属性会覆盖前面的属性。
        ```js
        const target = { a: 1, b: 1 };
        const source1 = { b: 2, c: 2 };
        const source2 = { c: 3 };
        Object.assign(target, source1, source2);
        target // {a:1, b:2, c:3}
        ```
    > 如果该参数不是对象，则会**先转成对象**，然后返回。undefined和null无法转成对象，就会报错。

    > 如果非对象参数出现在源对象的位置（即**非首参数**）,就不会报错。


- 其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
    ```js
    const v1 = 'abc';
    const v2 = true;
    const v3 = 10;
    const obj = Object.assign({}, v1, v2, v3);
    console.log(obj); // { "0": "a", "1": "b", "2": "c" }
    // 只有字符串合入目标对象（以字符数组的形式），数值和布尔值都会被忽略。这是因为只有字符串的包装对象，会产生可枚举属性。
    ```

- 注意
    1. 浅拷贝。
    2. 同名属性的替换，处理方法是替换，而不是添加。
    3. 可以用来处理数组，但是会把数组视为对象。
        ```js
        Object.assign([1, 2, 3], [4, 5]);// [4, 5, 3]
        ```
    4. 只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。
         ```js
        const source = {
            get foo() { return 1 }
        };
        const target = {};
        Object.assign(target, source);// { foo: 1 }
        // source对象的foo属性是一个取值函数，Object.assign()不会复制这个取值函数，只会拿到值以后，将这个值复制过去。
        ```

- 常见用途
    1. 为对象添加属性
    2. 为对象添加方法
    3. 克隆对象
        ```js
        function clone(origin) {
            let originProto = Object.getPrototypeOf(origin);
            return Object.assign(Object.create(originProto), origin);
        }
        // 这样克隆原始对象自身的值，还克隆它继承的值。
        ```
    4. 合并多个对象
    5. 为属性指定默认值
        ```js
        const DEFAULTS = {
            url: {
                host: 'example.com',
                port: 7070
            },
        };
        function processContent(options) {
            options = Object.assign({}, DEFAULTS, options);
            console.log(options);
        }
        processContent({ url: {port: 8000} })
        // {
        //   url: {port: 8000}
        // }
        ```
        > 由于存在浅拷贝的问题，DEFAULTS对象和options对象的所有属性的值，最好都是简单类型，不要指向另一个对象。否则，DEFAULTS对象的该属性很可能不起作用。


## 三、Object.getOwnPropertyDescriptor()

- 返回指定对象所有自身属性（非继承属性）的描述对象。

- 解决Object.assign()无法正确拷贝get属性和set属性的问题。



## 四、__proto__属性、Object.setPrototypeOf()、Object.getPrototypeOf()

1. __proto__属性，用来读取或设置当前对象的原型对象（prototype）。如果一个对象本身部署了__proto__属性，该属性的值就是对象的原型。

2. Object.setPrototypeOf()，用来设置一个对象的原型对象（prototype），返回参数对象本身。
    - 由于undefined和null无法转为对象，所以如果第一个参数是undefined或null，就会报错。
    

3. Object.getPrototypeOf()，用于读取一个对象的原型对象。



## 五、Object.keys()、Object.values()、Object.entries()

1. Object.keys()，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
    ```js
    var obj = { foo: 'bar', baz: 42 };
    Object.keys(obj)    // ["foo", "baz"]
    ```

2. Object.values()，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。
    ```js
    const obj = { foo: 'bar', baz: 42 };
    Object.values(obj)    // ["bar", 42]
    ```

    - 过滤属性名为 **Symbol 值的属性**。
    - 如果参数是一个字符串，会返回各个字符组成的一个**数组**。
    - 如果参数不是对象，会先转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，会返回**空数组**。


3. Object.entries()，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
    ```js
    const obj = { foo: 'bar', baz: 42 };
    Object.entries(obj)    // [ ["foo", "bar"], ["baz", 42] ]
    ```

    - 过滤属性名为 **Symbol 值的属性**。
    - 将对象转为**真正的Map结构**。
        ```js
        const obj = { foo: 'bar', baz: 42 };
        const map = new Map(Object.entries(obj));
        map // Map { foo: "bar", baz: 42 }
        ```



## 六、Object.fromEntries()

- 是Object.entries()的逆操作，用于将一个键值对数组转为对象。
    ```js
    Object.fromEntries([
    ['foo', 'bar'],
    ['baz', 42]
    ])
    // { foo: "bar", baz: 42 }
    ```
> **因此特别适合将 Map 结构转为对象**。
    ```js
    // 例一
    const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
    ]);
    Object.fromEntries(entries)    // { foo: "bar", baz: 42 }

    // 例二
    const map = new Map().set('foo', true).set('bar', false);
    Object.fromEntries(map)    // { foo: true, bar: false }
    ```

- 配合URLSearchParams对象，将查询字符串转为对象。
    ```js
    Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
    // { foo: "bar", baz: "qux" }
>>>>>>> 3060b42 (第一次Git提交所有文件)
    ```