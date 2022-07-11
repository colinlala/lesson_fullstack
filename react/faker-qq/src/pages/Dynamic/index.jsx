import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import {  SearchBar, List, Popup } from "antd-mobile";
import {
  StarOutline,
  GlobalOutline,
  VideoOutline,
  AppstoreOutline,
  MessageOutline,
  EnvironmentOutline,
  PicturesOutline,
  PlayOutline,
} from "antd-mobile-icons";
import { Link } from "react-router-dom";
import DynamicPopup from "./DynamicPopup";
import LeftPopup from "@/components/common/LeftPopup";

export default function Dynamic() {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper>
      <div className="top">
        <LeftPopup />
        <div className="top_center">
          <span>动态</span>
        </div>
        <div className="top_right">
          <div>
            <i
              className="iconfont icon-shezhi"
              onClick={() => {
                setVisible(true);
              }}
            ></i>
            <Popup
              visible={visible}
              onMaskClick={() => {
                setVisible(false);
              }}
              bodyStyle={{
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                minHeight: "50vh",
              }}
            >
              <DynamicPopup />
            </Popup>
          </div>
        </div>
      </div>
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
      <div className="list_first">
        <List
          style={{
            "--border-top": "none",
            "--border-inner": "none",
            "--border-bottom": "none",
          }}
        >
          <List.Item prefix={<StarOutline />} onClick={() => {}}>
            好友动态
          </List.Item>
          <List.Item prefix={<GlobalOutline />} onClick={() => {}}>
            小世界
          </List.Item>
        </List>
      </div>
      <div className="list_center">
        <List
          style={{
            "--border-top": "none",
            "--border-inner": "none",
            "--border-bottom": "none",
          }}
        >
          <List.Item prefix={<EnvironmentOutline />} onClick={() => {}}>
            附近
          </List.Item>
        </List>
      </div>
      <div className="list_last">
        <List
          style={{
            "--border-top": "none",
            "--border-inner": "none",
            "--border-bottom": "none",
          }}
        >
          <List.Item prefix={<PicturesOutline />} onClick={() => {}}>
            相册
          </List.Item>
          <List.Item prefix={<PlayOutline />} onClick={() => {}}>
            微视
          </List.Item>
          <List.Item prefix={<MessageOutline />} onClick={() => {}}>
            说说
          </List.Item>
          <List.Item prefix={<VideoOutline />} onClick={() => {}}>
            直播
          </List.Item>
          <List.Item prefix={<AppstoreOutline />} onClick={() => {}}>
            更多
          </List.Item>
        </List>
      </div>
    </Wrapper>
  );
}
