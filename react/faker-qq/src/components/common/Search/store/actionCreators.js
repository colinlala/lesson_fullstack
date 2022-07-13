import { getSearchListRequest, getSearchHistoryListRequest} from '@/api/request'
import * as actionTypes from './constants'

export const changeSearchList = (data) => ({
    type:actionTypes.CHANGE_SEARCH,
    data:data
})
export const changeSearchHistoryList = (data) => ({
    type:actionTypes.CHANGE_SEARCH_HISTORY_LIST,
    data:data
})
export const getSearchList = (query) => {
    return (dispatch) => {
        getSearchListRequest()
            .then(data => {
                let res = data.filter(item => {
                return item.name.indexOf(query)!=-1
              })
                dispatch(changeSearchList(res))
            })
    }
}
export const getSearchHistoryList = () => {
    return (dispatch) => {
        getSearchHistoryListRequest()
            .then(data => {
                dispatch(changeSearchHistoryList(data))
            })
    }
}