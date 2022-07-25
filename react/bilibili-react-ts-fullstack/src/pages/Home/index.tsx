import React, { useEffect } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { getParitionsRequest } from '@/api/partitions'
import { getPartitions } from '@/store/actions/partitions'

interface HomeProps {
  loading: Boolean,
  getParitionsDispatch: () => void;
}

const Home: React.FC<HomeProps> = (props) => {
  const { loading } = props
  const { getParitionsDispatch } = props
  useEffect(() => {
    getParitionsDispatch();
  })
  return (
    <div>
      {loading && <div>加载中...</div>}
    </div>
  )
}
const mapStateToProps = (state: rootState) => ({
  hotword: state.search.hotword,
  loading: state.loading,
  partitions: state.home.partitions
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getParitionsDispatch() {
    dispatch(getPartitions())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

