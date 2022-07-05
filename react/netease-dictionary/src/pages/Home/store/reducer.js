import * as actionTypes from './constants'

const defaultState = {
    banners:[],
    movies:[],
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_BANNER:
            return {
                ...state,
                banners:action.data
            }
        case actionTypes.CHANGE_MOVIES:
            return {
                ...state,
                movies:action.data
            }
        default:
            return state
    }
}