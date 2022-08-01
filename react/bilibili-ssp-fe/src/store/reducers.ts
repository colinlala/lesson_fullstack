import { combineReducers, AnyAction } from "redux"
import * as actionTypes from './constants'

const initalState = {
    loading: true,
    ranking: {
        rankingPartitions: [],
        rankingVideos: []
    },
    partitions: {
        oneLevelPartitions: []
    }
}

const loadingReducer = (state = initalState.loading, action:AnyAction) => {
    switch(action.type) {
        case actionTypes.SET_LOADING:
            return action.data
        default:
            return state
    }
}

const rankingReducer = (state = initalState.ranking, action:AnyAction) => {
    switch(action.type) {
        case actionTypes.SET_RANKING_PARTITIONS:
            return {
                ...state,
                rankingPartitions: action.data
            }
            break;
        case actionTypes.SET_RANKING_VIDEOS:
            return {
                ...state,
                rankingVideos: action.data
            }
            break;
        default:
            return state;
    }
}
const partitionsReducer = (state = initalState.partitions, action: AnyAction) => {
    switch(action.type) {
        case actionTypes.SET_ONE_LEVEL_PARTITIONS:
            return {
                ...state,
                oneLevelPartitions: action.data
            }    
        break;
        default:
            return state
    }
}

export default combineReducers({
    loading: loadingReducer,
    ranking: rankingReducer,
    partitions: partitionsReducer
})