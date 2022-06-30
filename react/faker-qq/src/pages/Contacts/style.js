import styled from "styled-components";
import style from '@/assets/global-style'
export const Wrapper = styled.div`

  .top{height: 4.35rem;
      display: flex;
      box-sizing: border-box;
      position: sticky;
      top: 0;
      left: 0;
      background: ${style["theme-color"]};
      z-index: 1000;
    .left {
      flex: 9;
      .info_img {
        float: left;
        margin: 0.5rem 0.5rem 0.1rem;
      }
      .info_desc {
        float: left;
        margin: 1rem 0.3rem 0.1rem;
        span {
          line-height: 2.4rem;
          font-weight: 900;
          font-size: 1rem;
        }
      }
    }
      .right{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1.19rem;
        a{
            text-decoration: none;
            color: black;
        }
        
      }
    }
  
    
`;
