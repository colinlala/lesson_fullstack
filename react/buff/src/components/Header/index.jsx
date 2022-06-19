import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageTitle } from '../../config'
import {HeaderWrapper} from './style'

export default function Header(props) {
  const [title, setTitle] = useState('首页')
  const { pathname = '/' } = useLocation()

  useEffect(() => {
    let _title = pageTitle[pathname] || '';
    setTitle(_title)
  })

  return (
    <HeaderWrapper>
        {title}
    </HeaderWrapper>
  )
}
