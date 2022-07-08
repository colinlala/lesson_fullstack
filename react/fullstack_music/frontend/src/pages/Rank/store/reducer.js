import * as actionTypes from "./constants";

const defaultState = {
  rankList: [],
  enterLoading: true,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_RANK_LIST:
      return {
        ...state,
        rankList: action.data,
      };
    case actionTypes.CHANGE_LOADING:
      return {
        ...state,
        enterLoading: action.data,
      };
    default:
      return state;
  }
};


