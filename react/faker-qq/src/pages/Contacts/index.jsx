import React, { useState, useEffect } from "react";
import {
  Avatar,
  PullToRefresh,
  SearchBar,
  DotLoading,
} from "antd-mobile";
import { Link } from "react-router-dom";
import { Wrapper } from "./style";
import { sleep } from "antd-mobile/es/utils/sleep";
import SmallList from "./SmallList";
import ContactsList from "./ContactsList";

function getNextData() {
  const ret = [];
  for (let i = 0; i < 18; i++) {
    ret.unshift(console.log("刷新好了"));
  }
  return ret;
}
const statusRecord = {
  pulling: 
    <div style={{ color: '#1c81ed' }}>
      <span>用力拉呀</span>
    </div>,
  canRelease: 
    <div style={{ color: '#1c81ed' }}>
      <span>松开吧</span>
    </div>,
  refreshing: 
    <div style={{ color: '#1c81ed' }}>
      <span>死命加载中</span>
      <DotLoading color='primary' />
    </div>,
  complete: 
    <div style={{ color: '#1c81ed' }}>
      <span>好啦</span>
    </div>,
};

export default function Contacts() {
  const [data, setData] = useState(() => getNextData());

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
          <span>联系人</span>
        </div>
        <div className="top_right">
          <div>
            <i className="iconfont icon-jiaren"></i>
          </div>
        </div>
      </div>      
      <PullToRefresh
        onRefresh={async () => {
          await sleep(1000);
          setData([...getNextData(), ...data]);
        }}
        renderText={(status) => {
          return <div>{statusRecord[status]}</div>;
        }}
      >
        <div
          className="bottom_center"
          style={{ background: "white", padding: "0.5rem 0.5rem" }}
        >
          <Link
            to="/home_contacts_Search"
            className="searchbar"
            style={{ textDecoration: "none" }}
          >
            <SearchBar
              placeholder="搜索"
              style={{ "--background": "rgb(245, 246, 249)" }}
            />
          </Link>
        </div>
        <SmallList />
        <ContactsList/>
      </PullToRefresh>
    </Wrapper>
  );
}

