import { getHomeSwiperRequest } from '@/api/request'
import * as actionTypes from './constants'

export const changeHomeSwiperList = (data) => ({
    type:actionTypes.CHANGE_HOME_SWIPER,
    data:data
})
export const getHomeSwiperList = (query) => {
    return (dispatch) => {
        getHomeSwiperRequest()
            .then(data => {
                dispatch(changeHomeSwiperList(data))
            })
    }
}