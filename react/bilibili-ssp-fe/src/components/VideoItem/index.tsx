import React from 'react'
import { Video } from '@/models/Video'
import { VideoWrapper } from './style'
import { Link } from 'react-router-dom'
import tv from '@/assets/images/tv.png';
import LazyLoad from "react-lazyload";
import { formatTenThousand } from '@/utils/string';

interface VideoItemProps {
    video: Video;
    showStatistics: boolean
}

const VideoItem :React.FC<VideoItemProps> = (props) => {
    const {
        video,
        showStatistics
    } = props
    
  return (
    <VideoWrapper>
        <Link to={"/video/av" + video.aid} className="video-link">
          <div className="image-container">
            <div className="image-wrapper">
              <img src={tv} alt=""  className="tv" />
              {
                video.pic && (
                  <LazyLoad>
                    <img src={video.pic} className="pic" alt={video.title}/>
                  </LazyLoad>
                )
              }
              <div className="cover">
                {
                  showStatistics && (
                    <div className="info">
                      <span className="play-icon icon-play-count"></span>
                      <span className="play-count">
                        { video.playCount ? formatTenThousand(video.playCount):"0"}
                      </span>
                      <span className="barrage-icon icon-barrage-count"></span>
                      <span className="barrage-count">
                        {video.barrageCount?formatTenThousand(video.barrageCount):"0"}
                      </span>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className="title">
            {video.title}
          </div>
        </Link>
    </VideoWrapper>
  )
}

export default VideoItem
