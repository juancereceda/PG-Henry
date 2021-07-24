import styled from "styled-components";

export const StyledCard = styled.div`
    display: grid;
    grid-template-columns: 20% 30% 30% 20%;
    grid-template-rows: 25% 40% 20% 15%;
    width: 80%;
    color: #E8E8E8;
    a{
        grid-column: 1/2;
        grid-row: 1/5;
        margin: 5%;
        text-decoration: none;
        color: #E8E8E8;
    }
    a img{
        grid-column: 1/2;
        grid-row: 1/5;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    h2{
        grid-column: 2/5;
        grid-row: 1/2;
        text-align: center;
        font-size: 2rem;
        text-shadow: .5rem .5rem .3rem #222831;
    }
    p{
        margin-left: 1vw;
        margin-right: 1vw;
        text-align: justify;
        grid-column: 2/5;
        grid-row: 2/3;
    }
    h4{
        margin-left: 1vw;
        grid-column: 2/3;
        grid-row: 3/4;
    }
    h5{
        margin-left: 1vw;
        grid-column: 3/5;
        grid-row: 3/4;
    }
    h6{
        margin-left: 1vw;
        grid-column: 2/5;
        grid-row: 4/5;
        
    }
    span{
        color: #F05454;
    }
    margin-top: 2%;
    margin-bottom: 1%;
    background-color: #30475E88;
    box-sizing: border-box;
    // border: 3px solid #30475E;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.7),
                inset 2px 3px 5px rgba(0,0,0,0.3),
                inset -2px -3px 5px rgba(0,0,0,0.5);
`;