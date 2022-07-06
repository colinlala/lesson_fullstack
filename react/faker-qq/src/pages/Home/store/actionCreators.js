import { getMessageListRequest } from '@/api/request'
import * as actionTypes from './constants'

export const changeMessageList = (data) => ({
    type:actionTypes.CHANGE_MESSAGE,
    data:data
})
export const getMessageList = () => {
    return (dispatch) => {
        getMessageListRequest()
            .then(data => {
                dispatch(changeMessageList(data))
            })
    }
}