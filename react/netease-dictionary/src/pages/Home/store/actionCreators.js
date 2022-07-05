import {
    getBannerRequest,
    getMoviesRequest,
} from '@/api/request'
import * as actionTypes from './constants'

// banners
export const changeBannerList = (data) => ({
    type:actionTypes.CHANGE_BANNER,
    data:data
})
export const getBannerList = () => {
    return (dispatch) => {
        getBannerRequest()
            .then(data => {
                const action = changeBannerList(data)
                dispatch(action)
            })
    }
}

// 广告轮播图
export const changeMoviesList = (data) => ({
    type:actionTypes.CHANGE_MOVIES,
    data:data
})
export const getMoviesList = () => {
    return (dispatch) => {
        getMoviesRequest()
            .then(data => {
                console.log(data)
                const action = changeMoviesList(data)
                dispatch(action)
            })
    }
}