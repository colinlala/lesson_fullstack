import styled from 'styled-components';

export const Wrapper = styled.div`
    .waterfall_conter{
        width: 88%;
        margin: 0 1em;
        padding: 1em;
    }
    .waterfall_detail{
        column-count: 2;
        column-gap: 1em;
    }
    .waterfall_item{
        padding: 1em;
        margin: 0 0 1em 0;
        break-inside: avoid;
        border: 0.1em solid gray;
        border-radius: 1em;
        .img{
            object-fit: cover;
            height: auto;
            margin-bottom: 10px;
        }
        .desc{
                font-weight: bolder;
            } 
        .waterfall_item_desc{
            padding: 1em;
            .name{
                float: left;
                left: 0.3em;
            }
            .like{
                float: right;
            }
        }
    }

`