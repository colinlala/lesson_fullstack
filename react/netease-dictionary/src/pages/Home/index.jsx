import React, {useEffect } from 'react'
import { actionCreators } from './store/index'
import { connect } from 'react-redux'
import TopBar from './TopBar'
import Search from './Search'
import Banners from './Banners'
import Adverte from './Adverte'
import Filter from './Filter'
import MoviesList from './MoviesList'



function Home(props) {
  
  const { banners ,movies } = props
  const { getBannerDataDispatch ,getMoviesDataDispatch } = props
  useEffect(() => {
    getBannerDataDispatch()
    getMoviesDataDispatch()
  },[])

  return (
    <div>
      <TopBar />
      <Search />
      <Banners banners={banners} />
      <Adverte />
      <Filter />
      <MoviesList movies={movies}/>
    </div>
  )
}
// state 状态树
const mapStateToProps = (state) => {
  return {
   banners:state.home.banners,
   movies:state.home.movies,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionCreators.getBannerList())
    },
    getMoviesDataDispatch() {
      dispatch(actionCreators.getMoviesList())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
