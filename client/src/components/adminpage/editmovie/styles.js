import styled from "styled-components";

const StyledContainer = styled.div`
    display: flex;
    margin-top: 50px;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;

    .postMovieForm {
    background-color: #2d4059;
    height: 800px;
    width: 850px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 50px;
    padding-bottom: 20px;
    }

    .formInputContainer {
    display: flex;
    justify-content: space-evenly;
    color: #ffffff;
    input, textarea {
        height: 35px;
        width: 280px;
        padding-left: 10px;
        font-family: Questrial;
        background-color: #c4c4c4;
        color: #222831;
        }
    textarea {
        width: 285px;
        height: 80px;
    }
    }
    .postMovieButton {
    background-color: #f05454;
    width: 240px;
    height: 60px;
    margin-top: 10px;
    color: #ffffff;
    font-size: 18px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #d93c3c;
        transition: 0.3s;
    }
}
`;


export default StyledContainer;