/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-01 11:37:36
 * @LastEditTime: 2022-06-01 13:06:23
 * @Description: 
 */
import { useState } from 'react'
// react 组件框架
import WeUI from 'react-weui'

// 解构
const {
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription
} = WeUI

function List(props) {
    const { data } = props
    return (
        data.map(book => <Book key={book.id} info={book} />)
    )
}
function Book(props) {
    // props 非自有的，传入
    const { info } = props
    return (
        // 传统方式
        // <div>
        //     <div>
        //         {
        //             data.map((item, id) =>
        //                 <div key={id}>{item.title} {item.des}</div>
        //             )
        //         }
        //     </div>
        // </div>

        // 引入框架式组件化 react-weui
        <MediaBox type="appmsg">
            <MediaBoxHeader>
                <img src="http://img53.ddimg.cn/2310311665003.jpg" alt="" />
            </MediaBoxHeader>
            <MediaBoxBody>
                <MediaBoxTitle>{info.title}</MediaBoxTitle>
                <MediaBoxDescription>{info.des}</MediaBoxDescription>
            </MediaBoxBody>
        </MediaBox>
    )
}

export default List