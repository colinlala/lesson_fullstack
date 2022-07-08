import styled from 'styled-components'
import style from '@/assets/global-style'

export const FooterWrapper=styled.div`
    width:100%;
    height:2.5rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    background:white;
    position:fixed;
    bottom:0;
    left:0;
    display:flex;
    /* background: ${style["theme-color"]}; */
    // Link生成的a标签
    a{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        text-decoration: none;
        color: black;
        &.active{
            color:blue;
        }
        i{
            font-size:1.5rem;
        }
        .num{
            position: absolute;
            top: -0.05rem;
            left: 4.2rem;
        }
    }
`