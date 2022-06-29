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
          font-weight: 900;
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
        
        .popover{ 
        }
      }
    }
  .bottom_center{
    .searchbar{
      
    }
  }
    
`;
