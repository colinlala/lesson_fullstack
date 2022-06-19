import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'


export default function Footer(props) {
  const { pathname } = useLocation()
  return (
    <FooterWrapper>
      <Link to="/home" className={classnames({ active: pathname == '/home' })}>
        <i className="iconfont icon-fangzi"></i>
        <span>BUFF</span>
      </Link>
      <Link to="/find" className={classnames({ active: pathname == '/find' })}>
        <i className="iconfont icon-faxian"></i>
        <span>发现</span>
      </Link>
      <Link to="/repertory" className={classnames({ active: pathname == '/repertory' })}>
        <i className="iconfont icon-kucun"></i>
        <span>库存</span>
      </Link>
      <Link to="/sell" className={classnames({ active: pathname == '/sell' })}>
        <i className="iconfont icon-iconfontzhizuobiaozhunbduan27"></i>
        <span>出售</span>
      </Link>
      <Link to="/mine" className={classnames({ active: pathname == '/mine' })}>
        <i className="iconfont icon-wode"></i>
        <span>我</span>
      </Link>
    </FooterWrapper>
  )
}
