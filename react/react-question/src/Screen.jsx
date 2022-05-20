/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-20 11:57:39
 * @LastEditTime: 2022-05-20 12:53:11
 * @Description: 
 */
import { useState } from 'react'

// props 不是自己的，是传过来的
function Screen({ logo, showContent }) {
    // console.log(props);  // logo: "明基" showContent: "显示器坏了"__proto__: Object
    return (
        <div>
            Screen {logo} {showContent}
        </div>
    )
}

export default Screen
