import styled from "styled-components";

export const StyledFAQs = styled.div`
    width: 80%;
    margin: 50px auto;
    padding: 10px 20px;
    border: 1px solid black;
    background-color: #e8e8e8;
    color: #222831;
    display: flex;
    flex-direction: column;
    & > h1 {
        line-height: 0;
        margin: 50px;
        align-self: center;
    }
    border-radius: 2.5%;
`;

export const StyledQuestion = styled.div`
    position: relative;
    margin: 5px 0;
    padding: 2px 25px;
    border: 1px solid blue;
    line-height: .7;
    border-radius: 50px 100px 50px 100px / 25px 50px 25px 50px;
`;

export const StyledAnswer = styled.div`
    margin: 0;
    padding: 0;
    display: none;
`;