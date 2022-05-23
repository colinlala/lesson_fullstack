/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-23 10:42:35
 * @LastEditTime: 2022-05-23 13:08:13
 * @Description: CommentInput组件
 */
import React, { useState } from 'react';
import { InputWrapper } from './comment.style';

function CommentInput() {
    // 状态
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = () => {
        const comment = {
            username,
            content
        }
        console.log(comment, '-------------------')
    }
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handleContentChange = (event) => {
        setContent(event.target.value);
    }
    return (
        <InputWrapper>
            <div className='comment-field'>
                <span className="comment-field-name">用户名</span>
                <div className="comment-field-input">
                    {/* 数据驱动的界面，表单和其他的不一样，要交互的
                    状态绑定了表单  来
                    表单输入可以同步到状态就好了  去
                    React不支持双向绑定，只支持单向数据绑定      改变状态 */}
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
            </div>
            <div className='comment-field'>
                <span className="comment-field-name">评论内容</span>
                <div className="comment-field-input">
                    <textarea value={content} onChange={handleContentChange}></textarea>
                </div>
            </div>
            <div className="commment-field-button">
                <button onClick={handleSubmit}>
                    发布
                </button>
            </div>
        </InputWrapper>
    )
}

export default CommentInput;