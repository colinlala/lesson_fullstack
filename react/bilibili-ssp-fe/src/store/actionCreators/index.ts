import { Dispatch} from 'redux'
import * as actionTypes from '../constants'
import {
    getRankingPartitionsRequest,
    getRankingRequest,
    getPartitionsRequest
} from '@/api/request'

// 页面级别action  
// promise.all 
export const getHomeDataAction = (rId: string) => {
    return (dispatch:Dispatch) => {
        dispatch(setLoading(true))
        return Promise.all([
            getPartitionsRequest(), 
            getRankingPartitionsRequest(),
            getRankingRequest(rId),
        ]).then(([partitionsResult, rankingPartitionsResult, videoResult]) => {
            let partitions = partitionsResult.data[0];
            partitions.filter((partition: any) => [13, 23, 11, 177].indexOf(partition.id) === -1)
            dispatch(setOneLevelPartitions(partitions))
            dispatch(setRankingPartitions(rankingPartitionsResult.data))
            dispatch(setRankingVideos(videoResult.data.list))
            dispatch(setLoading(false))
        })
    }
}

export const setOneLevelPartitions = (data: any[]) => ({
    type: actionTypes.SET_ONE_LEVEL_PARTITIONS,
    data
})

export const setLoading = (data: boolean) => ({
    type: actionTypes.SET_LOADING,
    data
})

export const setRankingPartitions = (data: any[]) => ({
    type: actionTypes.SET_RANKING_PARTITIONS,
    data
})

export const setRankingVideos = (data: any[]) => ({
    type: actionTypes.SET_RANKING_VIDEOS,
    data
})