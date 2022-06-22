import React from 'react'
import { Wrapper } from './style'


export default function Filter() {
  return (
    <Wrapper>
      <div className="filter">
        <div>
            <p>关注</p>
        </div>
        <div>
            <p>推荐</p>
        </div>
        <div>
            <p>热门</p>
        </div>
        <div>
            <p>Wow圈</p>
        </div>
      </div>
    </Wrapper>
  )
}
