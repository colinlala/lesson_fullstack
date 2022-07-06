import { getFriendsListRequest } from '@/api/request'
import * as actionTypes from './constants'

export const changeFriendsList = (data) => ({
    type:actionTypes.CHANGE_FRIENDS,
    data:data
})
export const getFriendsList = () => {
    return (dispatch) => {
        getFriendsListRequest()
            .then(data => {
                dispatch(changeFriendsList(data))
            })
    }
}