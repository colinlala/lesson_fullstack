/*
 * @Date         : 2022-06-16 20:47:54
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-16 21:20:24
 * @description  : 
 */
import React from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'

export default function CitySelect() {
    return (
        <Wrapper>
            <Link
                className='citygps'
                to="/cities"
            >
                获取城市地址
                <div className='header_search'>
                    <input type="text" placeholder='搜索商家，商品'/>
                </div>
            </Link>
        </Wrapper>
    )
}
