import React, { useState, useEffect } from 'react'
import { getBanners, getMovies } from '../../api/request'
import TopBar from './TopBar'
import Search from './Search'
import Banners from './Banners'
import Adverte from './Adverte'
import Filter from './Filter'
import MoviesList from './MoviesList'
import MoviePlay from '../../components/MoviePlay'


export default function Home() {
  const [banners, setBanners] = useState([])
  const [movies, setMovies] = useState([])
  useEffect(() => {
    (async () => {
      let { data: bannerData } = await getBanners()
      let { data: moviesData } = await getMovies()
      setBanners(bannerData)
      setMovies(moviesData)
    })()
  })
  return (
    <div>
      {/* 顶部信息 */}
      <TopBar />
      {/* 搜索栏 */}
      <Search />
      {/* 幻灯片 */}
      <Banners banners={banners} />
      <Adverte />
      <Filter />
      <MoviesList movies={movies}>
        <MoviePlay movies={movies}/>
      </MoviesList>

    </div>
  )
}
