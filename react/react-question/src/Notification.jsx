/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-20 12:56:54
 * @LastEditTime: 2022-05-20 13:04:46
 * @Description: 
 */
import { useState } from 'react'


function Notification({ n }) {

    return (
        <div>
            {n > 0 ? `有(${n})条未读消息` : '没有未读消息'}
        </div>
    )
}

export default Notification