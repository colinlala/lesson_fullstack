import styled from 'styled-components'

export const FooterWrapper=styled.div`
    width:100%;
    height:2.5rem;
    background:white;
    position:fixed;
    bottom:0;
    left:0;
    display:flex;
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
    }
`