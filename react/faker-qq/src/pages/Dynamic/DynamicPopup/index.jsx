import React from "react";
import { Wrapper } from "./style";
import { Divider, Switch } from "antd-mobile";
import Box1 from "@/assets/images/box1.png";
import Box2 from "@/assets/images/box2.png";

export default function DynamicPopup() {
  return (
    <Wrapper>
      <div className="container">
        <div className="line_container">
          <div className="line">-</div>
        </div>
        <div className="select">
          <span>样式选择</span>
          <div className="box_container">
            <div className="box">
              <div className="img-left">
                <img src={Box1} alt="" />
              </div>
              <span className="desc1">功能列表</span>
            </div>
            <div className="box">
              <div className="img-right">
                <img src={Box2} alt="" />
              </div>
              <span className="desc2">好友动态</span>
            </div>
          </div>
        </div>
        <Divider className="divider"/>
        <div className="switch">
          <span className="desc">在顶部展示QQ秀</span>
          <Switch />
        </div>
      </div>
    </Wrapper>
  );
}
