/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-23 11:56:30
 * @LastEditTime: 2022-05-23 14:15:52
 * @Description: 样式组件
 */
import styled from 'styled-components';    // 使用styled-components直接写css
// 引用失败，因为css_variable.js的white_color是export default的，将来会有很多css变量。
// import { white_color } from '../assets/css_variable'
// 一般使用对象引入
import style from '../assets/css_variable';
// console.log(style.white_color);  // 引入成功

// 样式组件 组件的样式这部分，都有相应的组件来做
export const Wrapper = styled.div`
    width: 500px;
    margin: 10px auto;
    font-style: 14px;
    background-color: ${style.white_color};
    border: 1px solid #f1f1f1;
    padding: 20px;
    /* 普通css传统写法不能嵌套，有逻辑性 */
    /* styled-components在后期跟换css样式式方便快捷，易懂 */
    .comment-list{
        background-color: ${style.white_color};
        padding: 20px;
        .comment{
            display: flex;
        }
    }
`

// css in js
export const InputWrapper = styled.div`
    background-color: #fff;
    border: 1px solid #f1f1f1;
    padding: 20px;
    margin-bottom: 10px;
    /* 方便css 逻辑的封装  css 嵌套 模块化 */
    .comment-field {
        margin-bottom: 15px;
        display: flex;
        .comment-field-name {
            display: flex;
            flex-basis: 100px;
            font-size: 14px;
        }
        .comment-field-input {
            display:flex;
            flex: 1;
            input, textarea {
                border: 1px solid #e6e6e6;
                border-radius: 3px;
                padding: 5px;
                outline: none;
                font-size: 14px;
                flex: 1
            }
            textarea {
                height: 100px;
            }
        } 
    }
    .commment-field-button{
        display: flex;
        justify-content: flex-end;
        button{
            padding: 5px 10px;
            width: 80px;
            border: none;
            border-radius: 3px;
            background-color: #00a3cf;
            color: #fff;
            outline: none;
            cursor: pointer;
            /* 鼠标交互的时候 */
            &:active{
                background: #13c1f1;
            }
        }
    }
`