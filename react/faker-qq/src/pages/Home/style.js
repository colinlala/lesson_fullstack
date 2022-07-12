import styled from "styled-components";
import style from "@/assets/global-style";
export const Wrapper = styled.div`
  .top {
    display: flex;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    left: 0;
    background: ${style["theme-color"]};
    align-items: center;
    z-index: 1000;
    height: 4.46rem;
    .top_center {
      width: 12rem;
      padding-left: 1rem;
      margin-top: 1rem;
      span {
        font-size: 0.95rem;
        font-weight: ${style["font-weight-l"]};
      }
      Button {
        border-width: 0rem;
        background-color: ${style["theme-color"]};
        font-size: 0.5rem;
      }
    }
    .top_right {
      display: flex;
      flex: 1;
      justify-content: space-around;
      .icon-longmao-{
        padding-left:1rem;
      }
      i {
        font-size: 1.9rem;
        font-weight: ${style["font-weight-s"]};
        margin-right: -0.8rem;
      }
    }
  }
`;
