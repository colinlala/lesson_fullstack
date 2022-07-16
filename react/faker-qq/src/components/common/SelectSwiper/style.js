import styled from "styled-components";

export const BannersWrapper = styled.div`
    .swiper{
    width:100%;
    height:50vw;
    background: transparent;
    
}
.swiper-slide{
    display: flex;
    flex-wrap: wrap;
    
}
.swiper-item{
    display:flex;
    width: 30%;
    height: 25%;
    justify-content: space-around;
    
} 
.swiper-item div{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:1vw;
    background: white;
    border-radius: 10px;
}
.swiper-item div p{
    height:14vw;
    width:14vw;
    /* background: skyblue; */
}
.swiper-item div img{
    height:100%;
    width:100%
}
.swiper-pagination{
    bottom: -4px;
    
}
.swiper-pagination-bullet{
    border-radius: 10px;
    height: 5px;
    width: 5px;
}
`;
