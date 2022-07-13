import { getMessageListRequest, getSearchListRequest} from '@/api/request'
import * as actionTypes from './constants'

export const changeSearchList = (data) => ({
    type:actionTypes.CHANGE_SEARCH,
    data:data
})
export const changeSearchHistoryList = (data) => ({
    type:actionTypes.CHANGE_SEARCH_LIST,
    data:data
})
export const getSearchList = () => {
    return (dispatch) => {
        getMessageListRequest()
            .then(data => {
                dispatch(changeSearchList(data))
            })
    }
}
export const getSearchHistoryList = () => {
    return (dispatch) => {
        getSearchListRequest()
            .then(data => {
                dispatch(changeSearchHistoryList(data))
            })
    }
}