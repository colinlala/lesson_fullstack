import React, { useState, useEffect } from "react";
import { Wrapper } from './style'
import {
  Avatar,
  SearchBar,
  List, 
} from "antd-mobile";
import {
  UnorderedListOutline,
  PayCircleOutline,
} from 'antd-mobile-icons'
import {Link} from 'react-router-dom'


export default function Dynamic() {
  return (
    <Wrapper>
      <div className="top">
        <div className="top_left">
          <Avatar
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202009%2F02%2F20200902191544_9a518.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659008815&t=4279b801ccf2fcf7ffb81e3a6d2a1542"
              style={{ "--size": "3.4rem", "--border-radius": "8rem" }}
            />
        </div>
        <div className="top_center">
          <span>动态</span>
        </div>
        <div className="top_right">
          <div>
            <i className="iconfont icon-add" style={{fontSize:'1.8rem'}}></i>
          </div>
          <div>
            <i className="iconfont icon-add" style={{fontSize:'1.8rem'}}></i>
          </div>
        </div>
      </div>           
      <div
          className="bottom_center"
          style={{ background: "#ffffff", padding: "0.5rem 0.5rem" }}
        >
          <Link
            to="/adada"
            className="searchbar"
            style={{ textDecoration: "none" }}
          >
            <SearchBar
              placeholder="搜索"
              style={{ "--background": "#eeeeee" }}
            />
          </Link>
      </div>
      <div className="list_first">
        <List style={{
            "--border-top": "none",
            "--border-inner": "none",
            "--border-bottom": "none",
          }}
        >
          <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
            好友动态
          </List.Item>
          <List.Item prefix={<PayCircleOutline />} onClick={() => {}}>
            小世界
          </List.Item>
        </List>
      </div>
      <div className="list_center">
        <List style={{
              "--border-top": "none",
              "--border-inner": "none",
              "--border-bottom": "none",
            }}
        >
          <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
            附近
          </List.Item>
        </List>
      </div>
      <div className="list_last">
        <List style={{
                "--border-top": "none",
                "--border-inner": "none",
                "--border-bottom": "none",
              }}
        >
          <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
            小窝
          </List.Item>
          <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
            结伴（测试版）
          </List.Item>
          <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
            坦白说
          </List.Item>
          <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
            运动
          </List.Item>
          <List.Item prefix={<UnorderedListOutline />} onClick={() => {}}>
            更多
          </List.Item>
        </List>
      </div>
    </Wrapper>
  )
}
