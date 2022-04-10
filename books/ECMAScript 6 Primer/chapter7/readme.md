# 数值的扩展

## 二进制和八进制表示法

- ES6 提供了二进制和八进制数值的新的写法，分别用**前缀0b（或0B）**和**0o（或0O）**表示。
    > 如果要将0b和0o前缀的字符串数值转为十进制，要使用**Number**方法。

## 数值分隔符

- 逗号(,)或者下划线(_)
    1. 不能放在数值的最前面（leading）或最后面（trailing）。
    2. 不能两个或两个以上的分隔符连在一起。
    3. 小数点的前后不能有分隔符。
    4. 科学计数法里面，表示指数的e或E前后不能有分隔符。
    5. 不能跟着前缀0b，0o
- 三个将字符串转成数值的函数，不支持数值分隔符。***Number()，parseInt()，parseFloat()***

## Number.isFinite(), Number.isNaN()

- Number.isFinite()用来检查一个数值是否为有限的（finite）
- Number.isNaN()用来检查一个值是否为NaN
> 而这两个新方法只对数值有效

## Number.parseInt(), Number.parseFloat()

- 移植到Number对象上面，行为完全保持不变。
- 逐步减少全局性方法，使得语言逐步模块化。

## Number.isInteger()

- 用来判断一个数值是否为整数。**整数和浮点数采用的是同样的储存方法**，所以 25 和 25.0 被视为同一个值。
> 数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）,多几位丢弃几位。


## Number.EPSILON

- 表示 1 与大于 1 的最小浮点数之间的差。

## 安全整数和 Number.isSafeInteger() 

- 准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。

## Math 对象的扩展


### Math.trunc()

- 去除一个数的小数部分，返回整数部分。
- Math.trunc内部使用Number方法将其先转为数值。对于空值和无法截取整数的值，返回NaN。

### Math.sign()

- 判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
    1. 参数为正数，返回+1；
    2. 参数为负数，返回-1；
    3. 参数为 0，返回0；
    4. 参数为-0，返回-0;
    5. 其他值，返回NaN。

### Math.cbrt()

- 计算一个数的立方根。
- 内部也是先使用Number()方法将其转为数值。

### Math.clz32() 

- 将参数转为 32 位无符号整数的形式，然后返回这个 32 位值里面有多少个前导 0。
    1. 对于小数，Math.clz32方法只考虑整数部分。
    2. 对于空值或其他类型的值，Math.clz32方法会将它们先转为数值，然后再计算。
    3. 左移运算符（<<）与Math.clz32方法直接相关。


### Math.imul() 

- 返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。
    > 乘积超过了 2 的 53 次方，JavaScript 无法保存额外的精度，就把低位的值都变成了 0。

### Math.fround()

- 返回一个数的32位单精度浮点数形式。
    1. 绝对值大于 2^24，返回的结果便开始丢失精度。
    2. 对于 NaN 和 Infinity，此方法返回原值。
    3. 对于其它类型的非数值，Math.fround 方法会先将其转为数值，再返回单精度浮点数。


### Math.hypot() 

- 返回所有参数的平方和的平方根。
    > 如果参数不是数值，Math.hypot方法会将其转为数值。只要有一个参数无法转为数值，就会返回 NaN。




### 对数方法

#### Math.expm1()

- 返回 (e^x)- 1，即Math.exp(x) - 1。

#### Math.log1p()

- 返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。

#### Math.log10()

- 返回以 10 为底的x的对数。如果x小于 0，则返回 NaN。

#### Math.log2()

- 返回以 2 为底的x的对数。如果x小于 0，则返回 NaN。



### 双曲函数方法 

1. Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
2. Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
3. Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
4. Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
5. Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
6. Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）



## BigInt 数据类型

- JS 只能到 53 个二进制位（相当于 16 个十进制位）,大于或等于2的1024次方的数值，JavaScript 无法表示，会返回Infinity。

- 为了与 Number 类型区别，BigInt 类型的数据必须添加***后缀n***。
    1. BigInt 与普通整数是两种值，它们之间并不相等。
    2. typeof运算符对于 BigInt 类型的数据返回bigint。
    3. BigInt 可以使用负号（-），但是不能使用正号（+），因为会与 asm.js 冲突。

### BigInt函数

- 将其他类型的值转为 BigInt。
- 必须有参数，而且参数必须可以正常转为数值。（小数也不行）

### 转换规则

- 可以使用Boolean()、Number()和String()这三个方法，将 BigInt 可以转为布尔值、数值和字符串类型。
- !也可以转布尔值

### 数学运算

- BigInt 类型的+、-、*和**这四个二元运算符，与 Number 类型的行为一致。除法运算/会舍去小数部分，返回一个整数。
- 不带符号的**右移位运算符>>>**和一元的求**正运算符+**运用在BigInt会报错

### 其他运算

- 0n会转为false，其他值转为true
- BigInt 与字符串混合运算时，会先转为字符串，再进行运算。