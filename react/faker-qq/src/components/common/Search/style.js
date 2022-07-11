import styled from 'styled-components'
import style from '@/assets/global-style'

export const Wrapper = styled.div`
        

    .search_div{
        background: white;
        box-sizing: border-box;
        padding-top: 0.6rem;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
    }
    .desc{
        color: gray;
        font-size: 0.85rem;
        display: flex;
        justify-content: center;
        background-color: white;
        padding-top: 0.6rem;
        padding-bottom:0.6rem;
    }
    .icon{
        display: flex;
        justify-content: space-around;
        font-size: ${style["icon-size-m"]};
        background-color: white;
        padding-bottom: 1.6rem;
        div{
            flex-direction: column;
            display: flex;
            align-items: center;
        }
        span{
            font-size: 0.3rem;
            margin-top: 0.3rem;
        }
    }
`