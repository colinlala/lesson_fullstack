<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-23 21:22:51
 * @LastEditTime: 2022-05-23 21:29:38
 * @Description: 
-->
- JSX对象 不是html， 怎么运行的？
    1. 受限通过给工程化的babel（js转义工具）
        - @babel/perset-react jsx代码转义
    2. react 可以运行的代码
        - React.createElement(dom标签，属性对象 | null，...children(嵌套))
        - 返回值？对象
        - document.getElementById('root').appendChild(JSX对象)
