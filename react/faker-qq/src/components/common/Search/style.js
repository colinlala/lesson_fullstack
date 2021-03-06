import styled from "styled-components";
import style from "@/assets/global-style";

export const OtherWrapper = styled.div`
    .desc {
        color: gray;
        font-size: 0.85rem;
        display: flex;
        justify-content: center;
        background-color: white;
        padding-top: 0.9rem;
        padding-bottom: 0.9rem;
    }
    .icon {
        display: flex;
        justify-content: space-around;
        font-size: ${style["icon-size-m"]};
        background-color: white;
        padding-bottom: 1.6rem;
        div {
            flex-direction: column;
            display: flex;
            align-items: center;
        }
        span {
            font-size: 0.3rem;
            margin-top: 0.3rem;
        }
    }
`;
export const PublicWrapper = styled.div``;

export const HistoryWrapper = styled.div`
    background-color: white;
    display: flex;
    padding-top: 0.5rem;
    .avatar_img {
        width: 4rem;
        margin-left: 0.7rem;
    }
    .search_history_list_name {
        flex: 1;
        display: flex;
        align-items: center;
        margin-left: -1.5rem;
        font-size: 0.9rem;
    }
    .button_x {
        button {
            background-color: white;
            border: 0;
            font-size: 1.2rem;
            color: rgb(190, 190, 190);
        }
        width: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const SearchResWrapper = styled.div`
    background-color: white;
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    .avatar_img {
        width: 4rem;
        margin-left: 0.7rem;
    }
    .search_history_list_name {
        flex: 1;
        display: flex;
        align-items: center;
        margin-left: -1.5rem;
        font-size: 0.9rem;
    }
    
`;
