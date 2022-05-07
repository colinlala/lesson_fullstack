# CSS3选择器 下

## 7.1 CSS3选择器 :enabled选择器

- 在Web的表单中，有些表单元素有可用（“***:enabled***”）和不可用（“***:disabled***”）状态，比如输入框，密码框，复选框等。在默认情况之下，这些表单元素都处在**可用状态**。
    ```
    /* html代码 */
    <form action="#">
        <div>
            <label for="name">Text Input:</label>
            <input type="text" name="name" id="name" placeholder="可用输入框"  />
        </div>
        <div>
            <label for="name">Text Input:</label>
            <input type="text" name="name" id="name" placeholder="禁用输入框"  disabled="disabled" />
        </div>
    </form>  

    /* css代码 */
    div{
        margin: 20px;
    }
    input[type="text"]:enabled {
        background: #ccc;
        border: 2px solid red;
    }

    /* “:enabled”选择器，修改文本输入框的边框为2像素的红色边框，并设置它的背景为灰色。 */
    ```


## 7.2 CSS3选择器 :disabled选择器

- ***:disabled***选择器刚好与“:enabled”选择器相反，用来选择不可用表单元素。要正常使用“:disabled”选择器，需要在表单元素的HTML中设置“disabled”属性。


## 7.3 CSS3选择器 :checked选择器

- 在表单元素中，单选按钮和复选按钮都具有选中和未选中状态。在CSS3中，我们可以通过状态选择器“***:checked***”配合其他标签实现自定义样式。而“:checked”表示的是*选中状态*。
    
    ```
    /* html代码 */
    <form action="#">
        <div class="wrapper">
            <div class="box">
            <input type="checkbox" checked="checked" id="usename" /><span>√</span>
            </div>
            <lable for="usename">我是选中状态</lable>
        </div>
        
        <div class="wrapper">
            <div class="box">
            <input type="checkbox"  id="usepwd" /><span>√</span>
            </div>
            <label for="usepwd">我是未选中状态</label>
        </div>
    </form> 

    /* css代码 */
    form {
        border: 1px solid #ccc;
        padding: 20px;
        width: 300px;
        margin: 30px auto;
    }
    .wrapper {
        margin-bottom: 10px;
    }
    .box {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        position: relative;
        border: 2px solid orange;
        vertical-align: middle;
    }
    .box input {
        opacity: 0;
        position: absolute;
        top:0;
        left:0;
    }
    .box span {
        position: absolute;
        top: -10px;
        right: 3px;
        font-size: 30px;
        font-weight: bold;
        font-family: Arial;
        -webkit-transform: rotate(30deg);
        transform: rotate(30deg);
        color: orange;
    }
    input[type="checkbox"] + span {
        opacity: 0;  // 透明度0-1
    }
    input[type="checkbox"]:checked + span {
        opacity: 1;
    }
    /* “:checked”状态来自定义复选框效果。 */
    ```


## 7.4 CSS3选择器 ::selection选择器

- ***::selection***伪元素是用来匹配突出显示的文本(用鼠标选择文本时的文本)。浏览器默认情况下，用鼠标选择网页文本是以“深蓝的背景，白色的字体”显示的。
    > Firefox支持 ::-moz-selection。

    ```
    /* html代码 */
    <p>“::selection”伪元素是用来匹配突出显示的文本。浏览器默认情况下，选择网站文本是深蓝的背景，白色的字体，</p>

    /* css代码 */
    ::selection {
        background: red;
        color: green;
    }
    /*  “::selection”选择器，将Web中选中的文本背景变成红色，文本变成绿色。*/
    ```


## 7.5 CSS3选择器 :read-only选择器

- ***:read-only***伪类选择器用来指定处于只读状态元素的样式。元素中设置了“readonly=’readonly’”。
    ```
    /* html代码 */
    <form action="#">
        <div>
            <label for="name">姓名:</label>
            <input type="text" name="name" id="name" placeholder="大漠" />
        </div>
        <div>
            <label for="address">地址:</label>
            <input type="text" name="address" id="address" placeholder="中国上海" readonly="readonly" />
        </div>
    </form>  

    /* css代码 */
    form {
        width: 300px;
        padding: 10px;
        border: 1px solid #ccc;
        margin: 50px auto;
    }
    form > div {
        margin-bottom: 10px;
    }
    input[type="text"]{
        border: 1px solid orange;
        padding: 5px;
        background: #fff;
        border-radius: 5px;
    }
    input[type="text"]:read-only{
        border-color: #ccc;
    }

    /*  “:read-only”选择器来设置地址文本框的样式。*/
    ```



## 7.6 CSS3选择器 :read-write选择器

- ***:read-write***选择器刚好与“:read-only”选择器相反，主要用来指定当元素处于非只读状态时的样式。



## 7.7 CSS3选择器 ::before和::after

- ::before和::after这两个主要用来给元素的前面或后面插入内容，这两个常和"content"配合使用，使用的场景最多的就是清除浮动。



## :hover选择器

- ***:hover***在鼠标移到链接上时添加的特殊样式。 
    > :hover 选择器器可用于所有元素，不仅是链接。  
        1. :link 选择器设置了未访问过的页面链接样式,   
        2. :visited 选择器设置访问过的页面链接的样式   
        3. :active选择器设置当你点击链接时的样式。  




