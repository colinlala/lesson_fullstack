import styled from "styled-components";
import style from '@/assets/global-style'
export const Wrapper = styled.div`
  .top{
      display: flex;
      box-sizing: border-box;
      position: sticky;
      top: 0;
      left: 0;
      background: ${style["theme-color"]};
      z-index: 1000;
    .left {
      flex: 7;
      .info_img {
        float: left;
        margin: 0.5rem 0.5rem 0.1rem;
      }
      .info_desc {
        float: left;
        margin: 1rem 0.3rem 0.1rem;
        span {
          font-weight: ${style["font-weight-l"]};
          font-size: 1rem;
        }
        .modal {

          button{
              border: none;
              font-size: 0.8rem;
          }

        }
      }
    }
      .right{
        flex: 3;
        display: flex;
        justify-content: center;
        align-items: center;
        i{
          font-size: ${style["icon-size-l"]};
          font-weight: ${style["font-weight-s"]};
        }
        .icon-longmao-{ 
            padding-right: 0.8rem;
        }
        .icon-add{
            margin-right: -1.6rem;
        }
        
      }
    }
  .bottom_center{
    .searchbar{
    }
  }
    
`;
