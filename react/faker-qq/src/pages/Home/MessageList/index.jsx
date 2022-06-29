import React from 'react'
import {  List, SwipeAction } from 'antd-mobile'

export default function MessageList() {
  return (
    <>
      <WithList />
    </>
  )
}
// 配合列表使用
const WithList = () => {
    // const leftActions = [
    //     {
    //         key: 'pin',
    //         text: '置顶',
    //         color: 'primary',
    //     },
    // ];
    const rightActions = [
        {
            key: 'pin',
            text: '置顶',
            color: 'primary',
        },
        {
            key: 'mute',
            text: '标为未读',
            color: 'warning',
        },
        {
            key: 'delete',
            text: '删除',
            color: 'danger',
        },
    ];
    const items = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N','O'];
    return (<List>
      {items.map(item => (<SwipeAction key={item}  rightActions={rightActions}>
          <List.Item>{item}</List.Item>
        </SwipeAction>))}
    </List>);
};

