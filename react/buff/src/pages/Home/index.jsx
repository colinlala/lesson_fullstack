import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'
import MajorPrinting from '../../assets/images/Major_printing.png'
import Printing from '../../assets/images/printing_guns.png'
import Mix from '../../assets/images/mix.png'
import Type from '../../assets/images/type_filter.png'


// import Search from './'

export default function Home() {
  return (

    <Wrapper>
      <div className='abc'>
        <i className='iconfont icon-sousuo'></i>
        <Link
          className="search"
          to="/search"
        >
          <div className="header_search">
            <input type="text" placeholder='搜索' />
          </div>
        </Link>
        <i className='iconfont icon-shaixuan'></i>
      </div>
      <div className='link_img'>
        <Link to="/search_printing">
          <img className={"linkImg"} src={Printing} alt="" />
        </Link>
        <Link to="/search_type">
          <img className={"linkImg"} src={Type} alt="" />
        </Link>
        <Link to="/search_mix">
          <img className={"linkImg"} src={Mix} alt="" />
        </Link>
        <Link to="/search_majorprinting">
          <img className={"linkImg"} src={MajorPrinting} alt="" />
        </Link>
      </div>
    </Wrapper>
  )
}
