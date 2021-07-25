import styled from "styled-components";

export const StyledFAQs = styled.div`
    width: 80%;
    margin: 50px auto;
    padding: 10px 20px;
    border: 1px solid black;
    background-color: #30475e;
    color: #e8e8e8;
    display: flex;
    flex-direction: column;
    & > h1 {
        line-height: 0;
        margin: 50px;
        align-self: center;
    }
    border-radius: 50px;
`;

export const StyledQuestion = styled.div`
    position: relative;
    margin: 10px 5px;
    background: #293949;
    border-radius: 25px 100px 25px 100px / 25px 100px 25px 100px;
    z-index: 10;
    & >div{
        position: relative;
        padding: 15px 0;
        background-color: transparent;
    }
    div:hover{
        cursor: pointer;
    }
    div h2{
        margin: 10px 25px;
        line-height: .5;
        position: relative;
        margin-bottom: 15px;
        z-index: -1;
    }
`;

export const StyledAnswer = styled.div`
    margin: 20px 50px 10px 50px;
    padding: 0 25px;
    text-align: justify;
    z-index: -1;
    a{
        color: #F05454;
    }
    transition: all 350ms ease-in-out;
    ${({answerhidden}) =>  answerhidden ?
    `
        margin: 0;
        padding: 0;
        line-heigth: 0rem;
        font-size: 0rem;
        & > p, a{
            color: #293949;
        }
    ` : `
        color: #e8e8e8;
    `}
`;