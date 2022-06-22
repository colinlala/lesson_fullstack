/*
 * @Date         : 2022-06-16 15:59:14
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-16 20:25:00
 * @description  : 
 */
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageTitle } from '../../config'
import TopBar from '../../pages/Home/TopBar'

export default function Header(props) {
  const [title, setTitle] = useState('首页')
  const { pathname = '/' } = useLocation()

  useEffect(() => {
    let _title = pageTitle[pathname] || '';
    setTitle(_title)
  })

  const isTitleExist = () => {
    if (title == '首页') {
      return 
    } else { title }
  }
  return (
    <header>
      {isTitleExist()}
    </header>
  )
}