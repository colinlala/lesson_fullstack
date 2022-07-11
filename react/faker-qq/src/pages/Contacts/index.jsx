import React, { useState, useEffect } from "react";
import {
  PullToRefresh,
  SearchBar,
  DotLoading,
} from "antd-mobile";
import { Link } from "react-router-dom";
import { Wrapper } from "./style";
import { sleep } from "antd-mobile/es/utils/sleep";
import SmallList from "./SmallList";
import ContactsList from "./ContactsList";
import LeftPopup from "@/components/common/LeftPopup";

function getNextData() {
  const ret = [];
  for (let i = 0; i < 18; i++) {
    ret.unshift(console.log("刷新好了"));
  }
  return ret;
}
const statusRecord = {
  pulling: (
    <div style={{ color: "#1c81ed" }}>
      <span>用力拉呀</span>
    </div>
  ),
  canRelease: (
    <div style={{ color: "#1c81ed" }}>
      <span>松开吧</span>
    </div>
  ),
  refreshing: (
    <div style={{ color: "#1c81ed" }}>
      <span>死命加载中</span>
      <DotLoading color="primary" />
    </div>
  ),
  complete: (
    <div style={{ color: "#1c81ed" }}>
      <span>好啦</span>
    </div>
  ),
};

export default function Contacts() {
  const [data, setData] = useState(() => getNextData());

  return (
    <Wrapper>
      <div className="top">
        <LeftPopup />
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
            to="/Search"
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
        <ContactsList />
      </PullToRefresh>
    </Wrapper>
  );
}
