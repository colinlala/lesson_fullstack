/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-23 10:42:09
 * @LastEditTime: 2022-05-23 11:59:18
 * @Description: CommentApp组件
 */
import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
// import './comment.css';   // 普通的引入css文件,需要在别的文件comment.css写css
// import styled from 'styled-components';    // 使用styled-components直接写css
// 为了区别开css和逻辑放到别的文件中  comment.style.js 
import { Wrapper } from './comment.style';


// // 样式组件 组件的样式这部分，都有相应的组件来做
// const Wrapper = styled.div`
//     width: 500px;
//     margin: 10px auto;
//     font-style: 14px;
//     background-color: #fff;
//     border: 1px solid #f1f1f1;
//     padding: 20px;
// `

function CommentApp() {
    return (
        // （引入css文件）对div文件className命名
        // <div className='wrapper'>CommentApp
        //     <CommentInput />
        //     <CommentList />
        // </div>

        // 使用styled-components
        <Wrapper>
            CommentApp
            <CommentInput />
            <CommentList />
        </Wrapper>
    )
}

export default CommentApp;