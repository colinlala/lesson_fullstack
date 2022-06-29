import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBannerRequest } from "@/api/request";
import { getBannerList } from "@/store/actionCreators";

function Recommend(props) {
  const { banners, getBannerDataDispatch } = props;
  useEffect(() => {
    getBannerDataDispatch();
  }, []);
  return <div>Recommend</div>;
}

// 把rudux中的数据通过mapStateToProps函数映射到此组件
// 对状态树的读操作
const mapStateToProps = (state) => {
  return {
    banners: state.recommend.banners,
  };
};
// 
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(getBannerList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
