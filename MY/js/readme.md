<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-02 14:11:49
 * @LastEditTime: 2022-04-30 15:46:07
 * @Description: 
 * 
-->
## 自学


- 创建正则表达式  

    1. 字面量创建  
        > /正则表达式语句/
        ```
        let bd = "baidu.com";
        console.log(/u/.test(bd)); //检测bd里面是否包含u 有返回true
        let a = 'u';
        console.log(/a/.test(bd)); //不能识别变量(一般不行)

        console.log(eval('/${a}/').test(bd)); // eval把字符串变成js表达式  这样可以识别 但是麻烦
        ```
    2. 使用对象创建    
        > new RegExp('查找的值' | 变量，'模式')
        ```
        let bd = "baidu.com";
        let reg = new RegExp( "u", "g");   // g全局模式
        console.log( reg.test(bd) );    //true

        let a = "u";
        let a = "\\w";     // 正则表达式也可以 匹配字母
        let reg = new RegExp( a, "g");
        console.log( reg.test(bd) );   //true
        ```

- 选择符

- typeof不行的话 Object.prototype.toString.apply(obj)可以拿到类型










正则表达式不能操作变量

parseint()//判断是不是数字 不是就返回Nan
Number.isNan()//判断是不是数字 是就返回true