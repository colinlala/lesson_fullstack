import React from 'react'
import { Wrapper } from './style'


export default function TopBar() {
  return (
    <Wrapper>
      <div className='topbar'>
        <div className="topbar topbar__left">
          <div className='topbar topbar__left__wd'>
            我的
          </div>
        </div>
        <div className="topbar topbar__right">
          <div className='topbar topbar__right__xx'>
            <i className='iconfont icon-xiaoxizhongxin'></i>
          </div>
          <div className="topbar topbar__right__fuli">
            每日福利
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
