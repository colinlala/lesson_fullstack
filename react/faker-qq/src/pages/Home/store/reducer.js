import * as actionTypes from './constants'

const defaultState = {
    messages:[],
}

export default ( state = defaultState, action ) => {
    switch (action.type) {
        case actionTypes.CHANGE_MESSAGE:
            return {
                ...state,
                messages:action.data
            }
        default:
            return state
    }
}