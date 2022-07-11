import React from "react";
import { useNavigate } from 'react-router-dom';
import { Wrapper } from "./style";
import { SearchBar } from "antd-mobile";
import {
  SmileOutline,
  StarOutline,
  UserAddOutline,
  GlobalOutline,
} from "antd-mobile-icons";

export default function Search() {
    const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="search_div">
        <SearchBar
          placeholder="搜索"
          showCancelButton={() => true}
          onCancel={()=>{navigate(-1)}}
        />
      </div>
      <div className="search_history"></div>
      <div className="desc">
        <span>搜索指定内容</span>
      </div>
      <div className="icon">
        <div className="icon_box">
          <UserAddOutline />
          <span>找人/群</span>
        </div>
        <div className="icon_box">
          <SmileOutline />
          <span>表情</span>
        </div>
        <div className="icon_box">
          <GlobalOutline />
          <span>小程序</span>
        </div>
        <div className="icon_box">
          <StarOutline />
          <span>动态</span>
        </div>
      </div>
    </Wrapper>
  );
}
