import styled from 'styled-components';

export const Wrapper = styled.div`
    .filter{
        display: flex;
        justify-content: space-around;
        p{
            line-height: 2.8em;
            font-size: 20px;
            &:hover{
                /* font-size: 25px; */
                color: orange;
            }
        }
        select{
            width:25%;
            border: 0;
        }
        div:first-child{
            display: flex;
            align-items: center;
        }
        div:last-child{
            display: flex;
            align-items: center;
        }

    }
`