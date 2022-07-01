import { getBannerRequest } from "@/api/request"
import * as actionTypes from './constants'



export const changeBannerList = (data) => ({
    type:actionTypes.CHANGE_BANNER,
    data:data
})
// 异步请求数据  api  一定放在action中
export const getBannerList = () =>{
    return (dispatch) =>{
        getBannerRequest()
            .then(data => {
                const action = changeBannerList(data.banners)
                dispatch(action)
            })
    }
}