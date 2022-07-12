import styled from "styled-components";
import style from "@/assets/global-style";

export const PopupContainer = styled.div`
    .img {
        width: 3rem;
        padding-left: 0.43rem;
    }
`;
export const Container = styled.div`
    .top {
        margin-bottom: 1rem;
        .punch {
            font-size: 0.9rem;
            margin: 1rem auto 0.8rem 0.65rem;
            font-weight: 550;
            .punch_desc {
                margin-left: 1rem;
                font-weight: ${style["font-weight-s"]};
            }
        }
        .desc {
            display: flex;
            margin-top: 0.6rem;
            .left {
                margin-left: 0.65rem;
                width: 4rem;
            }
            .center {
                flex: 1;
                margin-left: 0.5rem;
                .id {
                    font-size: 1.1rem;
                    font-weight: ${style["font-weight-l"]};
                }
                img {
                    height: 1.5rem;
                }
                .signature {
                    .signature_desc {
                        margin-left: 0.5rem;
                    }
                }
            }
            .right {
                width: 3rem;
                display: flex;
                justify-content: center;
                font-size: ${style["icon-size-m"]};
            }
        }
    }
    .list {
        .popupListItem {
            height: 2.7rem;
        }
    }
    .bottom {
        position: fixed;
        bottom: 1.6rem;
        display: flex;
        div{
                padding: 0 0.6rem;
            }
        .bottom_div {
            display: flex;
            flex-direction: column;
            align-items: center;
            i {
                font-size: ${style["icon-size-s"]};
            }
            span{
                font-size: 0.6rem;
            }
        }
    }
`;
