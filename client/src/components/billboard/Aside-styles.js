import styled from "styled-components";

export const StyledFirstAside = styled.div`
    position: relative;
    width: 95%;
    height: 20%;
    background-color: #F05454;
    border-radius: .5rem;
`;

export const StyledSecondAside = styled.div`
    position: relative;
    width: 95%;
    height: 20%;
    background-color: #F05454;
    border-radius: .5rem;
    a{
        text-decoration: none;
        color: #E8E8E8;
        display: inline-block;
        height: 100%;
        width: 100%;
    }
    p{
        text-align: center;
        vertical-align: top;
        font-size: 2rem;
        margin: 0;
        padding-top: 1%;
    }
    img{
        position: absolute;
        top: 32%;
        left: 50%;
        height: 50%;
        transform: translateX(-50%);
    }
`;

export const StyledAsidePublicity = styled.div`
    width: 95%;
    height: 50%;
    background-color: red;
    text-align: center;
    font-size: 2rem;
`;