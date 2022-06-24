import styled from 'styled-components';

export const Wrapper = styled.div`
    .waterfall_conter{
        margin: 0 1em;
        column-count: 2;
        a{
            background-color:#fff;
            break-inside:avoid;
            margin-bottom:1em;
            text-align:left;
            /* border-radius:5px; */
            img{
                width: 100%;
                border-radius: 5px;
            }
            .desc{
                width:95%;
                overflow:hidden;
                text-overflow:ellipsis;
                -webkit-line-clamp:2;
                display:-webkit-box;
                line-clamp:2;
                -webkit-box-orient:vertical;
                color:black;
                font-size:14px;
                font-weight:600;
                padding-left:0.5em;
                margin-bottom:0.5em;
            }
            .name{
                float: left;
                margin-left: 1em;
                color: gray;
            }
            .like{
                float: right;
                margin-right: 1em;
                color: gray;
            }
        }
    }
    

`