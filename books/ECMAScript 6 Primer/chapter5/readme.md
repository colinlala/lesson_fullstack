# 字符串的新增方法

## String.fromCodePoint()

- 可以识别大于0xFFFF的字符，弥补了String.fromCharCode()方法的不足。

## Sting.raw()

- 该方法返回一个斜杠都被转义的字符串，往往用于模板字符串的处理方法。斜杠已经转义，那么String.raw()会进行**再次转义**。

## codePointAt()

- 能够正确处理 4 个字节储存的字符，返回一个字符的码点。  
    codePointAt()方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。
    ```
    function is32Bit(c) {
        return c.codePointAt(0) > 0xFFFF;
    }

    is32Bit("𠮷") // true
    is32Bit("a") // false
    ```


## normalize()

- 用来将字符的不同表示方法(欧洲语言有语调符号和重音符号)统一为同样的形式，这称为 Unicode 正规化。     
    目前不能识别三个或三个以上字符的合成。


## 可以用来确定一个字符串是否包含在另一个字符串中

1. includes()：返回布尔值，表示是否找到了参数字符串。
2. startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
3. endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
4. indexOf():返回字符串数组下标


## repeat()将原字符串重复n次。


    1. 小数，会被取整。
    2.  0 到-1 之间的小数，NaN,等同于 0


## padStart(),padEnd()头部补全，尾部补全。 


    padStart()的常见用途是，1. 为数值补全指定位数。2. 提示字符串格式。
    ```
    '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
    ```


## trimStart()和trimEnd()消除字符串的空格。

- 它们返回的都是新字符串，不会修改原始字符串。


## matchAll()方法返回一个正则表达式在当前字符串的所有匹配



## replaceAll()一次性替换所有匹配

## at()接受一个整数作为参数，返回参数指定位置的字符，支持负索引
