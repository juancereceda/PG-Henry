import styled from "styled-components";

const form = styled.div`
  padding-top: 0.2em;
  width: 100%;
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    width: 24em;
    height: 30em;
    justify-content: space-evenly;
    align-items: center;
    background-color: #2d4059;
    margin-top: 0.5em;
    // border: .1em solid #ea5455;
    border-radius: 0.8em;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7),
      inset 2px 3px 5px rgba(0, 0, 0, 0.3),
      inset -2px -3px 5px rgba(0, 0, 0, 0.5);
    .passwordCnt {
      display: flex;
      flex-direction: column;
      .passwordLink {
        color: #e55151;
        font-size: 16px;
        margin-bottom: -16px;
      }
    }
    input {
      font-family: Questrial;
      font-size: 18px;
      width: 290px;
      height: 50px;
      padding-left: 10px;
      border: none;
    }
    .btnContainer {
      display: flex;
      justify-content: space-between;
      width: 300px;
      button {
        font-family: Questrial;
        font-size: 20px;
        height: 50px;
        width: 135px;
        border: none;
        border-radius: 10px;
        box-shadow: inset 2px 3px 5px rgba(0, 0, 0, 0.3),
          inset -2px -3px 5px rgba(0, 0, 0, 0.5);
        &:focus {
          box-shadow: inset -2px -3px 5px rgba(0, 0, 0, 0.3),
            inset 2px 3px 5px rgba(0, 0, 0, 0.5);
        }
      }
      .logIn {
        background-color: #ea5455;
        color: #ffffff;
      }
      .signUp {
        color: #2d4059;
        background-color: #e5e5e5;
      }
    }
    .google {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      height: 55px;
      width: 300px;
      border: none;
      font-family: Questrial;
      font-size: 20px;
      border-radius: 10px;
      box-shadow: inset 2px 3px 5px rgba(0, 0, 0, 0.3),
        inset -2px -3px 5px rgba(0, 0, 0, 0.5);
      &:focus {
        box-shadow: inset -2px -3px 5px rgba(0, 0, 0, 0.3),
          inset 2px 3px 5px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

export default form;
