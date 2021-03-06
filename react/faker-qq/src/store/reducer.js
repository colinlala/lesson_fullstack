// 模块化 路由模块基本就是数据模块
import { combineReducers } from "redux";
// store 中央 
// 地方
import { reducer as homeReducer } from '@/pages/Home/store/index'
import { reducer as contactsReducer } from '@/pages/Contacts/ContactsList/store/index'
import { reducer as searchReducer } from '@/components/common/Search/store/index'
import { reducer as homeswiperReducer } from '@/components/common/SelectSwiper/store/index'

export default combineReducers({
    home: homeReducer,
    contacts: contactsReducer,
    search: searchReducer,
    homeswiper: homeswiperReducer,
})