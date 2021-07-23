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
    border-radius: 2.5%;
`;

export const StyledQuestion = styled.div`
    position: relative;
    margin: 5px 0;
    padding: 2px 25px;
    border: 1px solid #293949;
    background: #293949;
    line-height: .7;
    border-radius: 25px 100px 25px 100px / 25px 100px 25px 100px;
    h2{
        position: relative;
        margin-bottom: 25px;
    }
`;

export const StyledAnswer = styled.div`
    margin-bottom: 20px;
    padding: 0 25px;
    line-height: 1.3;
    /* display: none; */
`;