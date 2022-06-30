import React from 'react'
import { List } from 'antd-mobile'

export default function SmallList() {
    
  return (
    <List style={{ '--border-bottom': 'none','--border-inner': 'none','--border-top': 'none' }}>
      <List.Item  clickable>新朋友</List.Item>
      <List.Item  clickable>群通知</List.Item>
    </List>
  )
}
