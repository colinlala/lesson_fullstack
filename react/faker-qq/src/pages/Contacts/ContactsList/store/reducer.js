import * as actionTypes from './constants'

const defaultState = {
    friendList:[],
}

export default ( state = defaultState, action ) => {
    switch (action.type) {
        case actionTypes.CHANGE_FRIENDS:
            return {
                ...state,
                friendList:action.data
            }
        default:
            return state
    }
}