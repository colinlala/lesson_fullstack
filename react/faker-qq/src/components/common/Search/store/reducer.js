import * as actionTypes from "./constants";

const defaultState = {
    searchList: [],
    searchHistoryList: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SEARCH:
            return {
                ...state,
                searchList: action.data,
            };
        case actionTypes.CHANGE_SEARCH_LIST:
            return {
                ...state,
                searchHistoryList: action.data,
            };
        default:
            return state;
    }
};
