import styled from 'styled-components';

export const Wrapper = styled.div`
            break-inside:avoid;

    .waterfall_conter{
        margin: 0 1em;
        column-count: 2;
        break-inside:avoid;
        a{
            break-inside:avoid;
            text-align:left;
            img{
                width: 100%;
                border-radius: 6px;
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
                margin-bottom: 1em;
            }
            .like{
                float: right;
                margin-right: 1em;
                color: gray;
                margin-bottom: 1em;
                .icon-aixin{
                    font-size: 13px;
                    margin-left: 0.5em;
                }
            }
        }
    }
    

`