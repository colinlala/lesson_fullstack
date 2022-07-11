import React from "react";
import classnames from "classnames";
import { Link, useLocation } from "react-router-dom";
import { FooterWrapper } from "./style";
import { Badge } from "antd-mobile";
import { isPathPartlyExisted } from '@/utils'


export default function Footer() {
  const { pathname } = useLocation()
  // 搜索时不需要Footer
  if(isPathPartlyExisted(pathname)) return 

  return (
    <FooterWrapper>
      <Link to="/home" className={classnames({ active: pathname == "/home" })}>
        <i className="iconfont icon-duihuaqipao"></i>
        <span>消息</span>
        <div className="num">
          <Badge content="99+"/>
        </div>
      </Link>
      <Link
        to="/contacts"
        className={classnames({ active: pathname == "/contacts" })}
      >
        <i className="iconfont icon-user"></i>
        <span>联系人</span>
      </Link>
      <Link
        to="/dynamic"
        className={classnames({ active: pathname == "/dynamic" })}
      >
        <i className="iconfont icon-browse"></i>
        <span>动态</span>
      </Link>
    </FooterWrapper>
  );
}
