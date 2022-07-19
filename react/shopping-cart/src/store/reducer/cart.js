import * as actionTypes from "../constants";
// reducer 分支 good
let data = {
    list: [],
};

//  引用式赋值---直接修改原来的数据
export default function (state = data, action) {
    switch (action.type) {
        case actionTypes.SET_ALL_GOODS:
            let list = action.data;
            list.map(item => item.check = true);
            return Object.assign({}, state, {
                list: list
            })    
        break;
        //  reducer 重新计算
        // 选择或反选 check功能
        // action { type: actionTypes.CHECK_GOODS, data: goodsID }
        case actionTypes.CHECK_GOODS:
            // 在reducer 重新计算前的状态  旧状态
            let checkList = state.list;
            checkList.map((item) => {
                if (item.goodsId == action.data) {
                    item.check = !item.check;
                    // 商品从选中到不选中的情况下，item.goodsNum 不会为 "0"
                    // 商品从不选中到选中的情况下，item.goodsNum == "0" 就不能被选中，所以赋值‘1’
                    item.goodsNum == "0" ? item.goodsNum == "1" : "";
                }
            });
            // 新状态
            return Object.assign({}, state, { list: [...checkList] });
            break;
        case actionTypes.CHNAGE_GOODS_NUM:
            let changeList = state.list;
            // + - 指定商品
            // data: { id: id, status: 'add|minus' }
            changeList.map((item) => {
                if (item.goodsId == action.data.goodsId) {
                    action.data.status == "add"
                        ? item.goodsNum++
                        : item.goodsNum--;
                    item.goodsNum == "0" ? (item.check = false) : "";
                    //  减到 -1 怎么办？不做交给UI去  item.goodsNum > 0 && <button>-</button>
                }
            });
            return Object.assign({}, state, { list: [...changeList] });
            break;
        case actionTypes.CHECK_ALL_GOODS:
            // 全选和取消全选
            // state 旧状态
            let checkAllList = state.list;
            // 新状态
            checkAllList.map((item) => {
                item.check = !action.data;
            });
            return Object.assign({}, state, { list: [...checkAllList] });
            break;
        default:
            // let list = state.list;
            // list.map((item) => {
            //     item.check = true;
            // });
            // Object.assign方法将所有可枚举和自有属性从一个或多个源对象复制到目标对象，返回修改后的对象。
            // 返回一个全新的对象  拥有 state   list
            // 为了搞定引用式赋值  ， 未来使用 ImmutableJS---将新的状态与原来的状态在物理层面上绝对区分开
            // redux 有洁癖   拿到了新状态，旧状态就丢了，

            // 一样
            // {
            //     ...state,
            //     list:
            // }
            // return Object.assign({}, state, { list: [...list] });
            return state
    }
}
