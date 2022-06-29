import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { getSingerList } from "@/store/actionCreators";


function Singers(props) {
  const { singerList ,getSingerDataDispatch} = props
  useEffect(()=>{
    getSingerDataDispatch()
  },[])
  return (
    <div>
        Singers
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    artists:state.singer.artists
  }
}
const maspDispatchToProps = (dispatch) => {
  return {
    getSingerDataDispatch() {
      dispatch(getSingerList());
    }
  }
}
export default connect(mapStateToProps,maspDispatchToProps)(Singers)