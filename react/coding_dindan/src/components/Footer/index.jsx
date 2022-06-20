/*
 * @Date         : 2022-06-16 15:59:21
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-16 21:42:35
 * @description  : 
 */
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'


export default function Footer(props) {
  const { pathname } = useLocation()
  // 选择城市时不需要Footer
  if (['/cities'].indexOf(pathname) != -1) return

  return (
    <FooterWrapper>
      <Link to="/home" className={classnames({ active: pathname == '/home' || pathname == '/' })}>
        {/* <Link to="/home" className={}> */}
        <i className='fa fa-home'></i>
        {/* <i className='iconfont icon-shouye'></i> */}
        <span>首页</span>
      </Link>
      <Link to="/find" className={classnames({ active: pathname == '/find' })}>
        <i className='fa fa-podcast'></i>
        {/* <i className='iconfont icon-faxian'></i> */}
        <span>发现</span>
      </Link>
      <Link to="/order" className={classnames({ active: pathname == '/order' })}>
        <i className='fa fa-book'></i>
        {/* <i className='iconfont icon-dingdan'></i> */}
        <span>订单</span>
      </Link>
      <Link to="/mine" className={classnames({ active: pathname == '/mine' })}>
        <i className='fa fa-user'></i>
        {/* <i className='iconfont icon-wode'></i> */}
        <span>我的</span>
      </Link>
    </FooterWrapper>
  )
}