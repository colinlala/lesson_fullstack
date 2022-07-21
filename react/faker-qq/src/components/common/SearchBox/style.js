import styled from "styled-components";
import style from "@/assets/global-style";

export const SearchWrapper = styled.div`
    /* .search_div{
        background: white;
        box-sizing: border-box;
        padding-top: 0.6rem;
        padding-left: 0.4rem;
        padding-right: 0.3rem;
        background-color: white;
    } */
    display: flex;
    padding-top: 0.8rem;
    background-color: white;
    .search_box {
        flex: 1;
        margin-left: 0.8rem;
        .box {
            border: 0;
            background-color: rgb(245, 245, 245);
            width: 98%;
            height: 1.8rem;
            outline-color: white;
            font-size: 0.8rem;
        }
    }
    .button_box {
        width: 3rem;
        .button_c {
            height: 100%;
            border: 0;
            background-color: white;
            color: blue;
        }
    }
`;
