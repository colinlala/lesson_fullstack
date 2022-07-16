import styled from "styled-components";
import style from "@/assets/global-style";
export const WholeModalWrapper = styled.div`
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(223, 223, 225);
        opacity: 0.97;
        z-index: 9998;
    }
`;
export const ModalWrapper = styled.div`
    /* 字体间隔 */
    letter-spacing: 1px;
    position: fixed;
    width: 90vw;
    height: 75vh;
    top: 7rem;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background: transparent;
    overflow: hidden;
    z-index: 9999;
    /* 加了这个就居中了 */
    margin: auto;
`;
export const TopWrapper = styled.div`
    /* background-color:  rgb(223, 223, 225); */
    background-color: white;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    border-radius: 10px;
    .top_world {
        font-size: 0.7rem;
        font-weight: 500;
        display: flex;
        justify-content: center;
        padding-top: 0.5rem;
        padding-bottom: 0.3rem;
        color: rgb(155, 158, 168);
    }
    .three_select {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
        div {
            margin-right: 0.5rem;
            margin-left: 0.5rem;
        }
        .select_img {
            img {
                width: 3rem;
                height: 3rem;
                border-radius: 5rem;
            }
        }
        .select_add {
            background-color: rgb(230, 230, 230);
            width: 3rem;
            height: 3rem;
            border-radius: 5rem;
            color: rgb(153, 153, 153);
            display: flex;
            align-items: center;
            justify-content: center;
            .icon-jia {
                font-size: 1.6rem;
            }
        }
        .select_quit {
            background-color: rgb(230, 230, 230);
            width: 3rem;
            height: 3rem;
            border-radius: 5rem;
            color: rgb(153, 153, 153);
            display: flex;
            align-items: center;
            justify-content: center;
            .icon-tuichu {
                font-size: 1.2rem;
            }
        }
        i {
            font-weight: 600;
        }
    }
`;
export const CenterWrapper = styled.div`
    background-color: white;
    border-radius: 10px;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    .center_world {
        font-size: 0.7rem;
        font-weight: 500;
        display: flex;
        justify-content: center;
        padding-top: 1.7rem;
        padding-bottom: 0.3rem;
        color: rgb(155, 158, 168);
    }
    .online_state {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.8rem;
        img {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: 0.4rem;
            border-radius: 5rem;
        }
        .online_state_world {
            font-weight: 700;
            letter-spacing: 1px;
        }
    }
`;
export const BottomWrapper = styled.div`
    .bottom_button {
        background-color: white;
        border-radius: 10px;
        height: 3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 90vw;
        .bottom_left {
            width: 3rem;
            font-weight: 600;
            margin-left: 0.6rem;
        }
        .bottom_right {
            flex: 1;
            color: rgb(178, 178, 178);
            font-size: 0.5rem;
            margin-right: -9.2rem;
        }
    }
`;

export const SwiperWrapper = styled.div`
    background-color: transparent;
    border-radius: 10px;
    margin-bottom: 1rem;
`;
