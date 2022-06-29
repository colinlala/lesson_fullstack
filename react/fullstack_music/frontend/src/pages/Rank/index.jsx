import React,{ useEffect } from 'react'
import { connect } from "react-redux";
import { getRankList } from '@/store/actionCreators'


function Rank(props) {
  const { rankList, getRankListDispatch } = props
  useEffect(() => {
    getRankListDispatch()
    // console.log('1111111111111');
  }, []);
  // console.log(rankList,'-------------------------------------------');
  return (
    <div>
        Rank
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    rankList: state.rank.rankList,
  }
}

// 状态改变的流程
const mapDispatchToProps = (dispatch) => {
  return {
    getRankListDispatch(){
      dispatch(getRankList())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Rank)