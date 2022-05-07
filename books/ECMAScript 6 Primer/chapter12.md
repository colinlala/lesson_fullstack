<<<<<<< HEAD
<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-02 19:24:49
 * @LastEditTime: 2022-05-02 19:47:26
 * @Description: 运算符的扩展
 * 
-->
# 运算符的扩展

## 一、指数运算符

- 指数运算符（**）。右结合,多个指数运算符连用时，是从最右边开始计算的。

    ```js
    2 ** 3 ** 2// 相当于 2 ** (3 ** 2)
    // 512
    ```



## 二、链判断运算符

```js
const firstName = message?.body?.user?.firstName || 'default';
const fooValue = myForm.querySelector('input[name=foo]')?.value
// 左侧的对象是否为null或undefined。如果是的，就不再往下运算，而是返回undefined。

iterator.return?.()
//iterator.return如果有定义，就会调用该方法，否则iterator.return直接返回undefined，不再执行?.后面的部分。
```


- 对于那些可能没有实现的方法，这个运算符尤其有用。
    ```js
    if (myForm.checkValidity?.() === false) {
    // 表单校验失败
    return;
    }
    // 老式浏览器的表单对象可能没有checkValidity()这个方法，这时?.运算符就会返回undefined，判断语句就变成了undefined === false，所以就会跳过下面的代码。
    ```

- 注意
    1. ?.运算符相当于一种**短路机制**，只要不满足条件，就不再往下执行。**一旦为真，右侧的表达式就不再求值**。

    2. 如果属性链有圆括号，链判断运算符对圆括号外部没有影响，只对圆括号内部有影响。，一般来说，**使用?.运算符的场合，不应该使用圆括号**。

    3. 报错
        ```js
        // 构造函数
        new a?.()
        new a?.b()

        // 链判断运算符的右侧有模板字符串
        a?.`{b}`
        a?.b`{c}`

        // 链判断运算符的左侧是 super
        super?.()
        super?.foo

        // 链运算符用于赋值运算符左侧
        a?.b = c
        ```

    4. 右侧不得为十进制数值。(允许foo?.3:0被解析成foo ? .3 : 0)




## 三、Null判断运算符

-  Null 判断运算符??。它的行为类似||，但是只有运算符左侧的值为**null或undefined**时，才会返回右侧的值。

- 跟链判断运算符?.配合使用，为null或undefined的值设置默认值。
    ```js
    const animationDuration = response.settings?.animationDuration ?? 300;
    // 如果response.settings是null或undefined，或者response.settings.animationDuration是null或undefined，就会返回默认值300。
    ```


- 很适合判断函数参数是否赋值。


- 如果多个逻辑运算符一起使用，必须用括号表明优先级，否则会报错。



## 四、逻辑赋值运算符

- 运算符||=、&&=、??=相当于先进行逻辑运算，然后根据运算结果，再视情况进行赋值运算。

    ```js
    // 或赋值运算符
    x ||= y
    // 等同于
    x || (x = y)

    // 与赋值运算符
    x &&= y
    // 等同于
    x && (x = y)

    // Null 赋值运算符
    x ??= y
    // 等同于
    x ?? (x = y)
    ```


- 为变量或属性设置默认值。
    ```js
    // 老的写法
    user.id = user.id || 1;

    // 新的写法
    user.id ||= 1;
    ```

- 例子
    ```js
    function example(opts) {
        opts.foo = opts.foo ?? 'bar';
        opts.baz ?? (opts.baz = 'qux');
    }

    //新写法
    function example(opts) {
        opts.foo ??= 'bar';
        opts.baz ??= 'qux';
    }

    //参数对象opts如果不存在属性foo和属性baz，则为这两个属性设置默认值。
=======
<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-02 19:24:49
 * @LastEditTime: 2022-05-02 19:47:26
 * @Description: 运算符的扩展
 * 
-->
# 运算符的扩展

## 一、指数运算符

- 指数运算符（**）。右结合,多个指数运算符连用时，是从最右边开始计算的。

    ```js
    2 ** 3 ** 2// 相当于 2 ** (3 ** 2)
    // 512
    ```



## 二、链判断运算符

```js
const firstName = message?.body?.user?.firstName || 'default';
const fooValue = myForm.querySelector('input[name=foo]')?.value
// 左侧的对象是否为null或undefined。如果是的，就不再往下运算，而是返回undefined。

iterator.return?.()
//iterator.return如果有定义，就会调用该方法，否则iterator.return直接返回undefined，不再执行?.后面的部分。
```


- 对于那些可能没有实现的方法，这个运算符尤其有用。
    ```js
    if (myForm.checkValidity?.() === false) {
    // 表单校验失败
    return;
    }
    // 老式浏览器的表单对象可能没有checkValidity()这个方法，这时?.运算符就会返回undefined，判断语句就变成了undefined === false，所以就会跳过下面的代码。
    ```

- 注意
    1. ?.运算符相当于一种**短路机制**，只要不满足条件，就不再往下执行。**一旦为真，右侧的表达式就不再求值**。

    2. 如果属性链有圆括号，链判断运算符对圆括号外部没有影响，只对圆括号内部有影响。，一般来说，**使用?.运算符的场合，不应该使用圆括号**。

    3. 报错
        ```js
        // 构造函数
        new a?.()
        new a?.b()

        // 链判断运算符的右侧有模板字符串
        a?.`{b}`
        a?.b`{c}`

        // 链判断运算符的左侧是 super
        super?.()
        super?.foo

        // 链运算符用于赋值运算符左侧
        a?.b = c
        ```

    4. 右侧不得为十进制数值。(允许foo?.3:0被解析成foo ? .3 : 0)




## 三、Null判断运算符

-  Null 判断运算符??。它的行为类似||，但是只有运算符左侧的值为**null或undefined**时，才会返回右侧的值。

- 跟链判断运算符?.配合使用，为null或undefined的值设置默认值。
    ```js
    const animationDuration = response.settings?.animationDuration ?? 300;
    // 如果response.settings是null或undefined，或者response.settings.animationDuration是null或undefined，就会返回默认值300。
    ```


- 很适合判断函数参数是否赋值。


- 如果多个逻辑运算符一起使用，必须用括号表明优先级，否则会报错。



## 四、逻辑赋值运算符

- 运算符||=、&&=、??=相当于先进行逻辑运算，然后根据运算结果，再视情况进行赋值运算。

    ```js
    // 或赋值运算符
    x ||= y
    // 等同于
    x || (x = y)

    // 与赋值运算符
    x &&= y
    // 等同于
    x && (x = y)

    // Null 赋值运算符
    x ??= y
    // 等同于
    x ?? (x = y)
    ```


- 为变量或属性设置默认值。
    ```js
    // 老的写法
    user.id = user.id || 1;

    // 新的写法
    user.id ||= 1;
    ```

- 例子
    ```js
    function example(opts) {
        opts.foo = opts.foo ?? 'bar';
        opts.baz ?? (opts.baz = 'qux');
    }

    //新写法
    function example(opts) {
        opts.foo ??= 'bar';
        opts.baz ??= 'qux';
    }

    //参数对象opts如果不存在属性foo和属性baz，则为这两个属性设置默认值。
>>>>>>> 3060b42 (第一次Git提交所有文件)
    ```