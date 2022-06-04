<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-04 13:50:33
 * @LastEditTime: 2022-06-04 15:27:41
 * @Description: 
-->
- weui css 框架
- react-weui  UI组件库      Dialog
- axios + 前端先调用fast mock 伪造远程接口，后端会给真正的接口，到时候只需要把之前的伪接口url切换成后端真正的接口url就行。
- 组件化思想
    1. html + css + js 类section  一个功能组件的封装
    2. 界面开发，组件化开发
    3. 采用一个好用的react UI组件库

- 状态
    1. 组件自有数据状态和props useState + props
    2. 静态界面，界面的状态
        - 界面的某一刻对应唯一的状态

- 父子组件传值的时候，props类型的检测
    - prop-types，当父组件传的值不是我们需要的化，会报错
        ```
        Address.propTypes = {
            address: PropTypes.array
        }
        ```