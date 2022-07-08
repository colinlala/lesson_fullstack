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
            /* flex: 1; */
            /* align-items: center; */
            /* display: flex; */
            /* float: left; */
            width: 15rem;
            font-size: ${style["icon-size-mini"]};
            padding-left: 1rem;
            font-weight: ${style["font-weight-l"]};
        }
        .top_right{
            width: 5rem;
            display: flex;
            flex: 1;
            justify-content: space-around;
            div{
                i{
                    font-size: ${style["icon-size-s"]};
                    font-weight: ${style["font-weight-s"]};
                    margin-right: -2rem;
                }
            }
        }
    }
`;
