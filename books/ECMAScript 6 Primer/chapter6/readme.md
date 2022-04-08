# 正则的扩展

## RegExp构造函数

1. 参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）。
2. 参数是一个正则表示式，这时会返回一个原有正则表达式的拷贝。

## 字符串的正则方法

- ES6 出现之前，字符串对象共有 4 个方法，可以使用正则表达式：match()、replace()、search()和split()。
    - 全都定义在RegExp对象上。
        1. RegExp.prototype[Symbol.match]
        2. RegExp.prototype[Symbol.replace]
        3. RegExp.prototype[Symbol.search]
        4. RegExp.prototype[Symbol.split]

## u 修饰符-正确处理四个字节的 UTF-16 编码

- 用来正确处理大于\uFFFF的 Unicode 字符。
    1. 点（.）字符
        ```
        var s = '𠮷';
        /^.$/.test(s) // false
        /^.$/u.test(s) // true
        ```
    2. 使用大括号表示 Unicode 字符,才能识别当中的大括号
        ```
        /\u{61}/.test('a') // false
        /\u{61}/u.test('a') // true
        ```
    3. 量词
    4. 预定义模式（\S是预定义模式，匹配所有非空白字符。）
        ```
        /^\S$/.test('𠮷') // false
        /^\S$/u.test('𠮷') // true
        ```
    5. i 修饰符,大小写
    6. 转义。没有u修饰符时，逗号前面的反斜杠是无效的，加了u修饰符就报错。


## RegExp.prototype.unicode 属性--是否设置了u修饰符

## y修饰符

- g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从**剩余的第一个位置**开始
- g修饰符会忽略非法字符，而y修饰符不会


## RegExp.prototype.sticky 属性--是否设置了y修饰符

## RegExp.prototype.flags 属性 --返回正则表达式的修饰符

## s 修饰符--使得.可以匹配任意单个字符:dotAll 模式(返回布尔值)

## 后行断言 

- “先行断言”，x只有在y前面才匹配，必须写成/x(?=y)/。
- “先行否定断言”，x只有不在y前面才匹配，必须写成/x(?!y)/。
ES2018引入：
- “后行断言”，x只有在y后面才匹配，必须写成/(?<=y)x/。
- “后行否定断言”，x只有不在y后面才匹配，必须写成/(?<!y)x/。
    > 需要先匹配/(?<=y)x/的x，然后再回到左边，匹配y的部分。  
    > 反斜杠引用，必须放在对应的那个括号之前。


##  Unicode 属性类，允许使用\p{...}和\P{...}（\P是\p的否定形式）代表一类 Unicode 字符，匹配满足条件的所有字符

- 使用的时候一定要加上u修饰符。


## 具名组匹配

### 简介  

- 允许为每一个组匹配指定一个名字。?<组名>
    ```
    const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;
    const matchObj = RE_DATE.exec('1999-12-31');
    const year = matchObj[1]; // 1999
    const month = matchObj[2]; // 12
    const day = matchObj[3]; // 31

    //每一组的匹配含义不容易看出来，而且只能用数字序号（比如matchObj[1]）引用，要是组的顺序变了，引用的时候就必须修改序号。
    // 引入了具名组匹配

    const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
    const matchObj = RE_DATE.exec('1999-12-31');
    const year = matchObj.groups.year; // "1999"
    const month = matchObj.groups.month; // "12"
    const day = matchObj.groups.day; // "31"
    ```


### 解构赋值和替换

- 有了具名组匹配以后，可以使用解构赋值直接从匹配结果上为变量赋值
    ```
    let {groups: {one, two}} = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
    one  // foo，foo被赋值为one
    two  // bar，bar被赋值为two
    ```
- 字符串替换时，使用$<组名>引用具名组。


### 引用（不懂

- 如果要在正则表达式内部引用某个“具名组匹配”，可以使用\k<组名>的写法。
- 数字引用（\1）依然有效。
    ```
    const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
    RE_TWICE.test('abc!abc') // true
    RE_TWICE.test('abc!ab') // false

    const RE_TWICE = /^(?<word>[a-z]+)!\1$/;
    RE_TWICE.test('abc!abc') // true
    RE_TWICE.test('abc!ab') // false

    const RE_TWICE = /^(?<word>[a-z]+)!\k<word>!\1$/;
    RE_TWICE.test('abc!abc!abc') // true
    RE_TWICE.test('abc!abc!ab') // false
    ```


## 正则匹配索引

- exec()方法的返回结果加上indices属性，在这个属性上面可以拿到匹配的开始位置和结束位置。
    ```
    /ab/.exec('zabbcdef').index // 1
    /ab/.exec('zabbcdef').indices // [ [1, 3] ]
    ```
- indices属性数组还会有一个groups属性。该属性是一个对象，可以从该对象获取具名组匹配的开始位置和结束位置。
    ```
    /ab+(?<Z>cd)/.exec('zabbcdef').indices.groups;
    // { Z: [ 4, 6 ] }
    ```


## String.prototype.matchAll(),可以一次性取出所有匹配。不过，它返回的是一个遍历器（Iterator），而不是数组
    ```
    const string = 'test1test2test3';
    const regex = /t(e)(st(\d?))/g;
    for (const match of string.matchAll(regex)) {
    console.log(match);
    }
    // ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"]
    // ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"]
    // ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]
    ```
- 由于string.matchAll(regex)返回的是遍历器，所以可以用for...of循环取出。相对于返回数组，返回遍历器的好处在于，如果匹配结果是一个很大的数组，那么遍历器比较节省资源。
- 使用...运算符和Array.from()方法就可以,遍历器转为数组。
    ```
    // 转为数组的方法一
    [...string.matchAll(regex)]
    // 转为数组的方法二
    Array.from(string.matchAll(regex))
    ```
