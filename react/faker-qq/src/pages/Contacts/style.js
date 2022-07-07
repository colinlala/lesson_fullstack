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
        align-items: center;
        height:4.46rem;
        z-index: 9999;
        .top_left{
            width: 3rem;
            padding-left: 0.43rem;
        }
        .top_center{
            flex: 1;
            /* justify-content: center; */
            align-items: center;
            display: flex;
            font-size: 1.2rem;
            padding-left: 7rem;
            font-weight: 600;
        }
        .top_right{
            width: 5rem;
            display: flex;
            justify-content: space-around;
            /* div{
                i{
                    font-size: 0.3rem;
                }
            } */
        }
    }
`;
