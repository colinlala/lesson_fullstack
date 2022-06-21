import styled from 'styled-components'

export const MarkListWrapper = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-template-rows: repeat(2, 100px);
    a{
        text-decoration: none;
        ul{
            list-style-type:none;
            img{
                width: 150px;
                height: 150px;
            } 
            span{
                color: gray;
                font-size: 15px;
            } 
        }
        
    }
    
`