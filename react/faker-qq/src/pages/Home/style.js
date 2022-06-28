import styled from "styled-components";
export const Wrapper = styled.div`
    display: flex;
    box-sizing: border-box;
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
`;
