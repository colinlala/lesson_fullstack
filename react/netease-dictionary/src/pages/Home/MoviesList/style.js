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
        .waterfall_item_img{
            background-size: contain;
            .img{
                /* object-fit: cover;
                height: auto;
                width: auto;
                margin-bottom: 10px; */
                
            }
        }
        .desc{
                font-weight: bolder;
            } 
        .waterfall_item_desc{
            padding: 1em;
            .name{
                float: left;
            }
            .like{
                float: right;
            }
        }
    }

`