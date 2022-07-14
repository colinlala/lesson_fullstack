import * as actionTypes from "./constants";

const defaultState = {
    homeswiperlist: [],
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_SWIPER:
            return {
                ...state,
                homeswiperlist: action.data,
            };
        default:
            return state;
    }
};
