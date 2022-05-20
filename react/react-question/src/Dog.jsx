/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-19 19:38:09
 * @LastEditTime: 2022-05-20 11:26:31
 * @Description: 
 */
import { useState } from 'react'

function Dog() {
    // let a = false;
    let [isBarking, setIsBarking] = useState(false)
    let [isRunning, setIsRunning] = useState(false)

    const handleClick = () => {
        // DOM编程已经一去不复返了
        setIsBarking(true)
        setIsRunning(true)
        setTimeout(() => {
            setIsBarking(false)
            setIsRunning(false)
        }, 2000)
    }
    return (
        // JSX 
        // 动态？多个状态
        <div onClick={handleClick}>
            <div>Dog</div>
            <p>{isBarking && '汪汪汪'}</p>
            <p>{isRunning && 'runrunrun'}</p>
        </div>
    )
}

export default Dog;