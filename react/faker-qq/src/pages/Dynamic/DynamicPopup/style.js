import style from "@/assets/global-style";
import styled from "styled-components";

export const Wrapper = styled.div`
  .container {
    .line_container {
      height: 2rem;
      .line {
        background-color: rgb(204, 204, 204);
        display: flex;
        align-items: center;
        justify-items: center;
        width: 3rem;
        height: 0.4rem;
        margin: 0.5rem auto auto;
        border-radius: 1rem;
        color: rgb(204, 204, 204);
      }
    }
    .select {
      height: 14rem;
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: ${style["font-weight-l"]};
        margin-bottom: 0.4rem;
      }
      .box_container {
        display: flex;
        /* align-items: center; */
        justify-content: center;
        .box {
          width: 30rem;
          .img-left {
            /* flex: 1; */
            /* margin-top: 0.3rem 3rem; */
            margin: auto;
            width: 3rem;
            height: 10rem;
            border-radius: 1rem;
          }
          .img-right {
            /* flex: 1; */
            /* margin-top: 0.3rem 3rem; */
            margin-left: 1rem;
            width: 3rem;
            height: 10rem;
            border-radius: 1rem;
          }
          span {
            font-weight: ${style["font-weight-s"]};
            font-size: 0.4rem;
            margin-top: 1rem;
            /* margin-bottom: 1rem; */
          }
          .desc1 {
            margin-left: 3rem;
          }
          .desc2 {
            margin-right: 4rem;
          }
        }
      }
    }
    .divider{
      margin-top: 0.6rem;
      margin-bottom: 0.6rem;
      margin-left: 2.8rem;
      width:18rem;
    }
    .switch {
      /* position: relative; */
      display: flex;
      margin: 0 2rem;
      align-items: center;
      .desc {
        flex: 1;
      }
    }
  }
`;
