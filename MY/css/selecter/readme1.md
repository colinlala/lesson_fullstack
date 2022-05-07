# CSS3选择器 上

## 属性选择器

- CSS2中引入了一些属性选择器，而CSS3在CSS2的基础上对属性选择器进行了扩展，新增了3个属性选择器，使得属性选择器有了通配符的概念

    ![alt 图标](tpf.jpg)  
    简单来说 :
    1. E[att^="val] 匹配开头  
    2. E[att$="val] 匹配结尾  
    3. E[att*="val] 匹配任意
    - html代码
        ```
        <a href="xxx.pdf">我链接的是PDF文件</a>
        <a href="#" class="icon">我类名是icon</a>
        <a href="#" title="我的title是more">我的title是more</a>
        ```
    - css代码
        ```
        a[ class^=icon ] { background: green; }
        a[ href$=pdf] { background: orange;  }
        a[ title*=more] { background: blue;  }
        ```

## 结构性伪类选择器—root

- ***:root***选择器，根选择器，意思就是匹配元素E所在文档的根元素。在HTML文档中，根元素始终是html。
    > “:root”选择器等同于***html***元素，***效果等同,最好用:root***  
    > > :root{background:orange}  
    > > html {background:orange;}  
    - 另外在IE９以下还可以借助“:root”实现hack功能。


## ~—not

- ***:not***选择器，否定选择器，和jQuery中的:not选择器一模一样，可以选择除某个元素之外的所有元素。
    - 就拿form元素来说，比如说，给表单中除submit按钮之外的input元素添加红色边框
    ```
    /* css代码 */
    form {
        width: 200px;
        margin: 20px auto;
    }
    div {
        margin-bottom: 20px;
    }
    input:not([type="submit"]){
        border:1px solid red;
    }

    /* html 代码*/
    <form action="#">
        <div>
            <label for="name">Text Input:</label>
            <input type="text" name="name" id="name" placeholder="John Smith" />
        </div>
        <div>
            <label for="name">Password Input:</label>
            <input type="text" name="name" id="name" placeholder="John Smith" />
        </div>
        <div>
            <input type="submit" value="Submit" />
        </div>
    </form>
    ```


## ~—empty

- ***:empty***选择器表示的就是空。用来选择没有任何内容的元素，这里没有内容指的是一点内容都没有，哪怕是一个空格。
    ```
    /* 中间一行没有颜色 */
    /* css代码 */
    <p>我是一个段落</p>
    <p> </p>
    <p></p>​

    /* html 代码*/
    p{
        background: orange;
        min-height: 30px;
    }
    p:empty {
        display: none;
    }​
    ```


## ~—target

- ***:target***选择器，目标选择器，用来匹配文档(页面)的url的某个标志符的目标元素。
    ```
    /* css代码 */
    .menuSection{
        display: none;
    }
    :target{/*这里的:target就是指id="brand"的div对象*/
        display:block;
    }

    /* html代码 */
    <h2><a  href = "#brand" > Brand </a></h2>
    <div class = "menuSection" id="brand">
        content for Brand
    </div>
    ```
    1. 触发元素的URL中的***标志符***通常会包含一个#号，后面带有一个标志符名称，#brand
    2. ***:target***就是用来匹配id为“brand”的元素（id="brand"的元素）,上面代码中是那个div元素。
    > 多个url时（多个target），***#brand***与后面的id="brand"是对应的，当同一个页面上有很多的url的时候你可以取不同的名字，只要#号后对的名称与id=""中的名称对应就可以了。


## ~—first-child

- ***:first-child***选择器，选择父元素的第一个子元素的元素E。简单点理解就是选择元素中的第一个子元素，记住是***子元素***，而不是后代元素。
    ```
    /* css代码 */
        ol > li{
            font-size:20px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        ol a {
            font-size: 16px;
            font-weight: normal;
        }

        ol > li:first-child {
            color: red;
        }

    /* html代码 */
    <ol>
        <li><a href="##">Link1</a></li>
        <li><a href="##">Link2</a></li>
        <li><a href="##">link3</a></li>
    </ol>

    /* 第一行标号为黄色 */
    ```



## ~—last-child

- ***:last-child***选择器与“:first-child”选择器作用类似，不同的是“:last-child”选择器选择的是元素的最后一个子元素。

    ```
    /* css代码 */
    .post {
        padding: 10px;
        border: 1px solid #ccc;
        width: 200px;
        margin: 20px auto;
    }
    .post p {
        margin:0 0 15px 0;
    }
    .post p:last-child {
        margin-bottom:0;
    }

    /* html代码 */
    <div class="post">
        <p>第一段落</p>
        <p>第二段落</p>
        <p>第三段落</p>
        <p>第四段落</p>
        <p>第五段落</p>
    </div>​

    /*每个段落都有15px的margin-bottom，假设不想让博客“post”中最后一个段落不需要底部的margin值*/
    ```


## ~—nth-child(n)

- ***:nth-child(n)***选择器，用来定位**某个父元素的一个或多个特定的子元素**。其中“n”是其参数，而且可以是整数值(1,2,3,4)，也可以是表达式(2n+1、-n+5)和关键词(odd奇数、even偶数)，但参数n的起始值始终是1，而不是0。***参数n的值为0时，选择器将选择不到任何匹配的元素***。
    * 当***:nth-child(n)***选择器中的n为一个表达式时，其中n是从0开始计算，当表达式的值为0或小于0的时候，不选择任何匹配的元素。
    ```
    /* css代码 */
    ol > li:nth-child(2n){
        background: orange;
    }

    /* html代码 */

    <ol>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
        <li>item6</li>
    </ol>

    /* “:nth-child(n)”选择器，并且参数使用表达式“2n”，将偶数行列表背景色设置为橙色。 */

    ```


## ~—nth-last-child(n)

- ***:nth-last-child(n)***选择器，所起的作用和“:nth-child(n)”选择器有所区别，从某父元素的最后一个子元素开始计算，来选择特定的元素。
        
    ```
    /* css代码 */
    ol > li:nth-last-child(5){
        background: orange;
    }
    /* html代码 */
    <ol>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
        <li>item6</li>
    </ol>​
    /* 选择列表中倒数第五个列表项，将其背景设置为橙色。*/
    ```


## first-of-type选择器

- ***:first-of-type***选择器类似于“:first-child”选择器，不同之处就是指定了***元素的类型***,其主要用来定位一个父元素下的某个类型的**第一个子元素**。
    
    ```
    /* css代码 */
    .wrapper {
        width: 500px;
        margin: 20px auto;
        padding: 10px;
        border: 1px solid #ccc;
        color: #fff;
    }
    .wrapper > div {
        background: green;
    }
    .wrapper > p {
        background: blue;
    }
    /*我要改变第一个段落的背景为橙色*/
    .wrapper > p:first-of-type {
        background: orange;
    }

    /* html代码 */
    <div class="wrapper">
        <div>我是一个块元素，我是.wrapper的第一个子元素</div>
        <p>我是一个段落元素，我是不是.wrapper的第一个子元素，但是他的第一个段落元素</p>
        <p>我是一个段落元素</p>
        <div>我是一个块元素</div>
    </div>
    /*:first-of-type”选择器，定位div容器中的第一个p元素（p不一定是容器中的第一个子元素），并设置其背景色为橙色。*/
    ```


## nth-of-type(n)选择器

- ***:nth-of-type(n)***选择器和“:nth-child(n)”选择器非常类似，不同的是它只计算父元素中指定的某种类型的子元素。当某个元素中的子元素不单单是同一种类型的子元素时，使用“:nth-of-type(n)”选择器来定位于父元素中某种类型的子元素是非常方便和有用的。在“:nth-of-type(n)”选择器中的“n”和“:nth-child(n)”选择器中的“n”参数也一样，*可以是具体的整数，也可以是表达式，还可以是关键词*。
    ```
    /* css代码 */
    .wrapper > p:nth-of-type(2n){
        background: orange;
    }

    /* html代码 */
    <div class="wrapper">
        <div>我是一个Div元素</div>
        <p>我是一个段落元素</p>
        <div>我是一个Div元素</div>
        <p>我是一个段落</p>
        <div>我是一个Div元素</div>
        <p>我是一个段落</p>
        <div>我是一个Div元素</div>
        <p>我是一个段落</p>
    </div>

    /* “:nth-of-type(2n)”选择器，将容器“div.wrapper”中偶数段数的背景设置为橙色。*/
    ```




## last-of-type选择器

- ***:last-of-type***选择器和“:first-of-type”选择器功能是一样的，不同的是他选择是父元素下的某个类型的**最后一个子元素**。
     ```
    /* css代码 */
     .wrapper > p:last-of-type{
        background: orange;
    }

    /* html代码 */
    <div class="wrapper">
        <p>我是第一个段落</p>
        <p>我是第二个段落</p>
        <p>我是第三个段落</p>
        <div>我是第一个Div元素</div>
        <div>我是第二个Div元素</div>
        <div>我是第三个Div元素</div>
    </div>

    /* :last-of-type”选择器，将容器“div.wrapper”中最后一个段落元素背景设置为橙色*/
    ```




## nth-last-of-type(n)选择器

- ***:nth-last-of-type(n)***选择器和“:nth-of-type(n)”选择器是一样的，选择父元素中指定的某种子元素类型，但它的起始方向是从***最后一个子元素开始***。

    ```
    /* css代码 */
    .wrapper > p:nth-last-of-type(3){
        background: orange;
    }

    /* html代码 */
    <div class="wrapper">
        <p>我是第一个段落</p>
        <p>我是第二个段落</p>
        <p>我是第三个段落</p>
        <p>我是第四个段落</p>
        <p>我是第五个段落</p>
        <div>我是一个Div元素</div>
        <p>我是第六个段落</p>
        <p>我是第七个段落</p>
    </div>

    /* :nth-last-of-type(n)”选择器将容器“div.wrapper”中的倒数第三个段落背景设置为橙色。 */
    ```

## only-child选择器

- ***:only-child***选择器选择的是父元素中只有一个子元素，而且只有唯一的一个子元素。也就是说，匹配的元素的父元素中仅有一个子元素，而且是一个唯一的子元素。
    ```
    /* css代码 */
    .post p {
        background: green;
        color: #fff;
        padding: 10px;
    }
    .post p:only-child {
        background: orange;
    }

    /* html代码 */
    <div class="post">
            <p>我是一个段落</p>
            <p>我是一个段落</p>
    </div>
    <div class="post">
            <p>我是一个段落</p>      /* 这个变橘色了*/
    </div>

    /* :only-child”选择器，来控制仅有一个子元素的背景样式 */
    ```


## only-of-type选择器

- ***:only-of-type***选择器用来选择一个元素是它的父元素的唯一一个相同类型的子元素。“:only-of-type”是表示一个元素他有很多个子元素，而其中只有一种类型的子元素是唯一的，使用“:only-of-type”选择器就可以选中***这个元素中的唯一一个类型子元素***。





    
