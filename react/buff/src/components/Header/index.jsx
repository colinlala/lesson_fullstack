import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageTitle } from '../../config'
import {HeaderWrapper} from './style'

export default function Header(props) {
  const [title, setTitle] = useState('首页')
  const location = useLocation()

  useEffect(() => {
    const location = window.location.pathname
    // console.log(location)
    let _title ;
    if (location == '/order') {
      _title = '订单'
    } else if (location == '/home' || location == '/') {
      _title = '首页'
    }
    setTitle(_title)
  })

  return (
    <HeaderWrapper>
        {title}
    </HeaderWrapper>
  )
}
