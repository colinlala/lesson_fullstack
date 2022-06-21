import React, { useState, useEffect } from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'
import { getGuns } from '../../api/request'
import Filter from './Filter'
import List from './List'


// import Search from './'

export default function Home() {

  const [guns, setGuns] = useState([])
  useEffect(() => {
    (async () => {
      let { data } = await getGuns()
      setGuns(data)
    })()
  })

  return (
    <div>
      <Wrapper>
        <div className='nav'>
          <i className='iconfont icon-sousuo'></i>
          <Link className="search" to="/search">
            <div className="header_search">
              <input type="text" placeholder='搜索' />
            </div>
          </Link>
          <i className='iconfont icon-shaixuan'></i>
        </div>
      </Wrapper>
      <Filter />
      <List guns={guns} />
    </div>

  )
}
