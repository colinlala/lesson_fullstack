import React from 'react'
import classnames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'

export default function Footer() {
  const { pathname } = useLocation()
  return (
    <FooterWrapper>
      <Link to="/home" className={classnames({ active: pathname == '/home'})}>
        <i className='iconfont icon-duihuaqipao'></i>
        <span>消息</span>
      </Link>
      <Link to="/contacts" className={classnames({ active: pathname == '/contacts' })}>
        <i className='iconfont icon-user'></i>
        <span>联系人</span>
      </Link>
      <Link to="/dynamic" className={classnames({ active: pathname == '/dynamic' })}>
        <i className='iconfont icon-browse'></i>
        <span>动态</span>
      </Link>
    </FooterWrapper>
  )
}
