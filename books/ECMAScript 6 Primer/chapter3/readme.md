# 变量的解构赋值

## 数组的解构赋值

### 基本用法
- 从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
    > 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
    ```
    let [x, , y] = [1, 2, 3];
    x // 1
    y // 3

    let [head, ...tail] = [1, 2, 3, 4];
    head // 1
    tail // [2, 3, 4]

    let [x, y, ...z] = ['a'];
    x // "a"
    y // undefined
    z // []

    ```
    1. 不完全解构
    2. 完全解构

-  Set 结构，也可以使用数组的解构赋值。
    ```
    let [x, y, z] = new Set(['a', 'b', 'c']);
    x // "a"
    ```

- 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
    ```
    function* fibs() {
        let a = 0;
        let b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }

    let [first, second, third, fourth, fifth, sixth] = fibs();
    sixth // 5

    //fibs是一个 Generator 函数，原生具有 Iterator 接口。
    ```


### 默认值
```
let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
```
- ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效
    ```
    let [x = 1] = [undefined];
    x // 1

    let [x = 1] = [null];
    x // null
    ```

- 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。

- 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
    ```
    let [x = 1, y = x] = [];     // x=1; y=1
    let [x = 1, y = x] = [2];    // x=2; y=2
    let [x = 1, y = x] = [1, 2]; // x=1; y=2
    let [x = y, y = 1] = [];     // ReferenceError: y is not defined
    ```

## 对象的解构赋值

### 简介
- 对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
    ```
    let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
    foo // "aaa"
    bar // "bbb"

    let { baz } = { foo: 'aaa', bar: 'bbb' };
    baz // undefined
    ```


- 如果变量名与属性名不一致，必须写成下面这样。
    ```
    let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
    baz // "aaa"
    foo // 报错
    bar // 报错

    let obj = { first: 'hello', last: 'world' };
    let { first: f, last: l } = obj;
    f // 'hello'
    l // 'world'
    ```
> 实际上说明，对象的解构赋值是下面形式的简写
 ```
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };
```
- 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正***被赋值的是后者***，而不是前者。

- 解构也可以用于嵌套结构的对象。


- 对象的解构赋值可以取到继承的属性。


### 默认值

- 默认值生效的条件是，对象的属性值严格等于undefined。
    ```
    var {x = 3} = {x: undefined};
    x // 3

    var {x = 3} = {x: null};
    x // null
    ```

### 注意点

1. 如果要将一个已经声明的变量用于解构赋值，必须非常小心。
    ```
    // 错误的写法
    let x;
    {x} = {x: 1};
    // SyntaxError: syntax error
    ```
    - 只有***不将大括号写在行首***，避免 JavaScript 将其解释为代码块，才能解决这个问题。
    ```
    // 正确的写法
    let x;
    ({x} = {x: 1});
    ```

2. 解构赋值允许等号左边的模式之中，不放置任何变量名。

3. 数组本质是特殊的对象，因此可以对数组进行对象属性的解构。
    ```
    let arr = [1, 2, 3];
    let {0 : first, [arr.length - 1] : last} = arr;
    first // 1
    last // 3
    // 数组arr的0键对应的值是1，[arr.length - 1]就是2键，对应的值是3。
    ```



## 字符串的解构赋值

- 字符串被转换成了一个类似数组的对象。
- 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
    ```
    let {length : len} = 'hello';
    len // 5
    ```


## 数值和布尔值的解构赋值

- 如果等号右边是数值和布尔值，则会先转为对象。
    ```
    let {toString: s} = 123;
    s === Number.prototype.toString // true

    let {toString: s} = true;
    s === Boolean.prototype.toString // true
    // 数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。
    ```
- 由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

## 函数参数的解构赋值

- undefined就会触发函数参数的默认值。

## 圆括号问题

- 建议只要有可能，就不要在模式中放置圆括号。以下三种解构赋值不得使用圆括号。

1. 变量声明语句，模式不能使用圆括号。
    ```
    // 全部报错
    let [(a)] = [1];

    let {x: (c)} = {};
    let ({x: c}) = {};
    let {(x: c)} = {};
    let {(x): c} = {};

    let { o: ({ p: p }) } = { o: { p: 2 } };
    ```

2. 函数参数也属于变量声明，因此不能带有圆括号。
    ```
    // 报错
    function f([(z)]) { return z; }
    // 报错
    function f([z,(x)]) { return x; }
    ```
3. 赋值语句的模式
    ```
    // 全部报错
    ({ p: a }) = { p: 42 };
    ([a]) = [5];
    // 报错
    [({ p: a }), { x: c }] = [{}, {}];
    ```
- 赋值语句的非模式部分，可以使用圆括号。
    ```
    [(b)] = [3]; // 正确
    ({ p: (d) } = {}); // 正确
    [(parseInt.prop)] = [3]; // 正确
    ```

## 用途

1. 交换变量的值
2. 从函数返回多个值
    - 函数如果要返回多个值，只能将它们放在数组或对象里返回。
3. 函数参数的定义
    ```
    // 参数是一组有次序的值
    function f([x, y, z]) { ... }
    f([1, 2, 3]);

    // 参数是一组无次序的值
    function f({x, y, z}) { ... }
    f({z: 3, y: 2, x: 1});
    ```
4. 提取 JSON 数据
    ```
    let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };

    let { id, status, data: number } = jsonData;

    console.log(id, status, number);
    // 42, "OK", [867, 5309]
    ```
5. 函数参数的默认值
6. 遍历 Map 结构
    ```
    const map = new Map();
    map.set('first', 'hello');
    map.set('second', 'world');

    for (let [key, value] of map) {
    console.log(key + " is " + value);
    }
    // first is hello
    // second is world
    ```
7. 输入模块的指定方法
    ```
    // 加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
    const { SourceMapConsumer, SourceNode } = require("source-map");
    ```