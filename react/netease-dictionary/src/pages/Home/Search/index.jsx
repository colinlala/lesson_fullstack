import React from 'react'
import { SearchBar } from 'antd-mobile'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'

export default function Search() {
  return (
    <Wrapper>
      {/* 点击搜索框跳转搜索页面 */}
      <Link
        to='/homesearch'
      >
        <SearchBar className='searchbar' placeholder='请输入内容' showCancelButton />
      </Link>
    </Wrapper>
  )
}
