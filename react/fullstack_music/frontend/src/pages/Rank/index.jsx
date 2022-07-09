import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRankList } from "./store/actionCreators";
import Loading from "@/components/common/loading";
import { List, ListItem, SongList, Container } from "./style";
import Scroll from "@/components/common/Scroll";
import { EnterLoading } from "@/pages/Singers/style";
import { filterIndex } from "@/api/utils";
// import { renderRoutes } from 'react-router-config';

function Rank(props) {
  const { rankList, enterLoading, songsCount } = props;
  const { getRankListDataDispatch } = props;

  // toJS 把一个 immutable 数据改成正常的数组（在）
  // let rankList = list ? list.toJS() : [];

  useEffect(() => {
    getRankListDataDispatch();
  }, []);

  const renderSongList = (list) => {
    return list.length ? (
      <SongList>
        {
          list.map((item, index) => {
            return <li key={index}>{index+1}. {item.first} - {item.second}</li>
          })
        }
      </SongList>
    ) : null;
  }

  const renderRankList = (list,global) => {
    return (
      <List globalRank={global}>
       {
        list.map((item, index) => {
          return (
            <ListItem key={`${item.coverImgId}${index}`} tracks={item.tracks}>
              <div className="img_wrapper">
                <img src={item.coverImgUrl} alt=""/>
                <div className="decorate"></div>
                <span className="update_frequecy">{item.updateFrequency}</span>
              </div>
              {/* item.tracks */}
              { renderSongList(item.tracks)  }
            </ListItem>
          )
       })
      } 
      </List>
    );
  };

  // globalStartIndex 4
  let globalStartIndex = filterIndex(rankList);
  // 4个榜单
  let officialList = rankList.slice(0, globalStartIndex);
  // console.log(globalStartIndex, '---------------------',officialList, '=====================',rankList);
  let globalList = rankList.slice(globalStartIndex);
  // console.log(globalList);
  let displayStyle = enterLoading ? { display: "none" } : { display: "" };

  return (
    <Container play={songsCount}>
      <Scroll>
        <div>
          <h1 className="offical" style={displayStyle}>
            官方榜
          </h1>
          {renderRankList(officialList)}
          <h1 className="global" style={displayStyle}>
            全球榜
          </h1>
          {renderRankList(globalList, true)}
          {enterLoading && (
            <EnterLoading>
              <Loading></Loading>
            </EnterLoading>
          )}
        </div>
      </Scroll>
      {/* {renderRoutes(props.route.routes)} */}
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    rankList: state.rank.rankList,
    enterLoading: state.rank.enterLoading,
    songsCount: state.player.playList.length,
  };
};
// 状态改变的流程
// 数据状态变得万无一失
const mapDispatchToProps = (dispatch) => {
  return {
    getRankListDataDispatch() {
      dispatch(getRankList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank));
