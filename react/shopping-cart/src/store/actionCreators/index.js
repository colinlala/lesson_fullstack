import * as actionTypes from "../constants";
import { getAllGoodsRequest } from '../../api'

export const checkGoodsAction = (goodsId) => ({
    type: actionTypes.CHECK_GOODS,
    data: goodsId,
});

//  data { goodsId, status: "add|minus" }
export const checkGoodsNumAction = (data) => ({
    type: actionTypes.CHNAGE_GOODS_NUM,
    data,
});
export const checkAllGoodsAction = (data) => ({
    type: actionTypes.CHECK_ALL_GOODS,
    data,
});

export const setAllGoods = (data) => ({
    type: actionTypes.SET_ALL_GOODS,
    data,
});
export const getAllGoodsAction = () => {
    return (dispatch) => {
        getAllGoodsRequest().then((data) => {
            dispatch(setAllGoods(data));
        });
    };
};
