import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 19%;  
    width: 18.1%;
    margin:20px;
    height: 580px;
    border-radius: 5px;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 0);
    padding: 10px;
    box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.24);
    -webkit-box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.24);
    -moz-box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.24);
    transition: all 0.25s;
    color: #E8E8E8;
    &:hover {
        transform: translateY(-15px);
        box-shadow: 0 12px 16px rgba(0,0,0,0.2);
    }


    a{
        display: flex;
        flex-direction: column;
        margin: 5%;
        text-decoration: none;
        color: #E8E8E8;
    }
    
    img{
        width: 90%;
        height: 300px;
        border-radius: 5px;
        margin-bottom: 15px;
    }
    h2{
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 1.7rem;
        text-shadow: .5rem .5rem .3rem #222831;
    }
    p{
        margin-left: 1vw;
        margin-right: 1vw;
        text-align: justify;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h4{
        margin-left: 1vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
   
    span{
        color: #F05454;
    }
    
    background-color: #30475E88;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.7),
                inset 2px 3px 5px rgba(0,0,0,0.3),
                inset -2px -3px 5px rgba(0,0,0,0.5);
`;