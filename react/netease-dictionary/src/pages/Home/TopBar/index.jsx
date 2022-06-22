import React from 'react'
import { Wrapper } from './style'


export default function TopBar() {
  return (
    <Wrapper>
      <div className='topbar'>
        <div className="topbar topbar__left">
          我的
        </div>
        <div className='topbar topbar__right__xx'>
          <i className='iconfont icon-xiaoxizhongxin'></i>
        </div>
        <div className="topbar topbar__right__fuli">
          每日福利
        </div>
      </div>
    </Wrapper>
  )
}
