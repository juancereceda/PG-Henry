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
    height: 20em;
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
    input,
    button {
      font-family: Questrial;
      font-size: 18px;
      width: 290px;
      height: 50px;
      padding-left: 10px;
      border: none;
    }
    button {
      background-color: #ea5455;
      color: #ffffff;
      border-radius: 10px;
      cursor: pointer;
      &:hover {
        filter: opacity(80%);
      }
    }
    h4 {
      color: #ffffff;
      text-align: center;
      font-family: Questrial;
      font-size: 18px;
      padding-left: 10px;
      border: none;
      margin: 0px;
    }
  }
`;

export default form;
