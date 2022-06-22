import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'
// import { isPathPartlyExisted } from '../../utils'


export default function Footer(props) {
  const { pathname } = useLocation()
  // if(isPathPartlyExisted(pathname)) return 


  return (
    <FooterWrapper>
      <Link to="/home" className={classnames({ active: pathname == '/home' || pathname == '/' })}>
        <i className='iconfont icon-shouye1'></i>
        <span>首页</span>
      </Link>
      <Link to="/movie" className={classnames({ active: pathname == '/movie' })}>
        <i className='iconfont icon-shipin'></i>
        <span>视频</span>
      </Link>
      <Link to="/study" className={classnames({ active: pathname == '/study' })}>
        <i className='iconfont icon-w_xuexi'></i>
        <span>学习</span>
      </Link>
      <Link to="/translate" className={classnames({ active: pathname == '/translate' })}>
        <i className='iconfont icon-shuyi_fanyi-105'></i>
        <span>翻译</span>
      </Link>
      <Link to="/vip" className={classnames({ active: pathname == '/vip' })}>
        <i className='iconfont icon-huiyuan'></i>
        <span>会员</span>
      </Link>
    </FooterWrapper>
  )
}