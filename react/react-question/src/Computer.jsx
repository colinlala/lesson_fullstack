/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-20 11:55:51
 * @LastEditTime: 2022-05-20 12:49:59
 * @Description: 
 */
import { useState } from 'react';
import Screen from './Screen'

const Computer = () => {

    const [status, setStatus] = useState(false);
    const toggle = () => {
        setStatus(!status);
    }
    return (
        <div>
            Computer
            <button onClick={toggle}>开关</button>
            {/* 父子组件传值 */}
            <Screen logo="明基" showContent={status ? '显示器亮了' : '显示器坏了'} />
        </div>
    )
}

export default Computer
