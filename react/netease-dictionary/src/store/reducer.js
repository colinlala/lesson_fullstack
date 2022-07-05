import { combineReducers } from "redux";
import { reducer as homeReducer } from '@/pages/Home/store/index'

export default combineReducers({
    home:homeReducer,
})