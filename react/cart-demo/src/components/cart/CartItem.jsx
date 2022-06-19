import { Typography } from 'antd'
import React from 'react'

export default function CartItem(props) {
    const { item, onCheckedChange } = props
    const { checked, name, price } = item
    // 为什么还要去声明一个函数？
    // const onWrapCheckedChange = (e) => {
    //     onCheckedChange(item)
    // }

    return (
        <div className="item-card">
            <div className="checkbox-wrap">
                <input
                    type="checkbox"
                    checked={checked}
                    // 如果没有别的事情处理，就最好这样写
                    onChange={onCheckedChange.bind(null,item)}
                />
            </div>
            <p className="item-info">
                {name} <Typography.Text mark>${price}</Typography.Text>
            </p>
        </div>
    )
}
