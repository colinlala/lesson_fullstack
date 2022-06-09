/*
 * @Date         : 2022-06-08 19:23:34
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-08 20:26:53
 */
import React, { useState } from 'react'
import { Input } from 'antd'

const TodoInput = ({ placeholder, onSetQuery }) => {

    const [value, setValue] = useState("")
    const onAdd = () => {
        // 按回车显示-----------
        // console.log('-----------------')
        // 父子组件传值
        onSetQuery(value)
    }
    return (
        <section className="input-wrap">
            <Input
                className='input'
                // 回车
                onPressEnter={onAdd}
                value={value}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
            />
        </section>
    )
}

export default TodoInput