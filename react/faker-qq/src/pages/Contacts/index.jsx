import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Modal,
  Popover,
  PullToRefresh,
  SearchBar,
  Divider,
  DotLoading,
} from "antd-mobile";
import { Link } from "react-router-dom";
import { Wrapper } from "./style";
import {
  getFriendsListRequest,
  getSubscriptionListRequest,
  getGroupListRequest,
} from "@/api/request";
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
  pulling: "用力拉",
  canRelease: "松开吧",
  // refreshing: <SpinLoading color='primary' />,
  refreshing: (
    <div style={{ color: "#00b578" }}>
      <span>死命加载中</span>
      <DotLoading color="primary" />
    </div>
  ),
  complete: "好啦",
  // <div style={{ color: '#22968c' }}>
  //   <span>好啦</span>
  // </div>,
};

export default function Contacts() {
  const [data, setData] = useState(() => getNextData());
  // const [groups, setGroups] = useState([]);
  const [friendslist, setFriendslist] = useState([]);
  // const [subscription, setSubscription] = useState([]);
  useEffect(() => {
    (async () => {
      let { data: friendsListData } = await getFriendsListRequest();
      // let { data: subscriptionListData } = await getSubscriptionListRequest();
      // let { data: groupListData } = await getGroupListRequest();
      setFriendslist(friendsListData);
      // setSubscription(subscriptionListData);
      // setGroups(groupListData);
    })();
  });

  return (
    <Wrapper>
      <div className="top">
        <div className="left">
          <div className="info_img">
            <Avatar
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202009%2F02%2F20200902191544_9a518.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659008815&t=4279b801ccf2fcf7ffb81e3a6d2a1542"
              style={{ "--size": "3.4rem", "--border-radius": "8rem" }}
            />
          </div>
          <div className="info_desc">
            <span>联系人</span>
          </div>
        </div>
        <div className="right">
          <Link to="/asdasdasd">
            <i
              className="iconfont icon-jiaren"
              style={{ fontSize: "1.2rem",marginRight:'-1.2rem' }}
            ></i>
          </Link>
        </div>
      </div>
      <PullToRefresh
        onRefresh={async () => {
          await sleep(1000);
          // await Loading();
          setData([...getNextData(), ...data]);
        }}
        renderText={(status) => {
          return <div>{statusRecord[status]}</div>;
        }}
      >
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
        <SmallList />
        <ContactsList friendslist={friendslist}/>
      </PullToRefresh>
    </Wrapper>
  );
}
