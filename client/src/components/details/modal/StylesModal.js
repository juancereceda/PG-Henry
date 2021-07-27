import styled from "styled-components";

const StyledContainer = styled.div`
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;    

    .postMovieForm {
        background-color: #2d4059;
        height: 300px;
        width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        border-radius: 12px;
    }

    .formInputContainer {
        display: flex;
        justify-content: space-evenly;
        margin-top: 40px;
        input, textarea {
            height: 35px;
            width: 400px;
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

    .close {
        margin-right: 400px;
        background-color: #f05454;
        width: 20px;
        height: 20px;
        color: #ffffff;
        font-size: 9px;
        border-radius: 15px;
        cursor: pointer;
        &:hover {
            background-color: #d93c3c;
            transition: 0.3s;
        }
    }

    .postMovieButton {
        background-color: #f05454;
        width: 140px;
        height: 30px;
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