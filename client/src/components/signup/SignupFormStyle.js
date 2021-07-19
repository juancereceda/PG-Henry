import styled from "styled-components";
import { VscError } from "react-icons/vsc";
import { BsCheckCircle } from "react-icons/bs";


const ValidationColors ={
  Active:'#222831',
  Error: '#F05454',
  Success:'#4e7816',   
}



export const ErrorIcon = styled(VscError)`
     position: relative;
     z-index: 100;
     right: 40px;
     bottom:-10px;
     /* opacity: 0; */
`;

export const CheckIcon = styled(BsCheckCircle)`
     position: relative;
     z-index: 100;
     right: 40px;
     bottom:-10px;
     /* opacity: 0; */
`;

export const Legend = styled.p`
     font-size: 12px;
     margin-bottom: 0px;
     color: ${ValidationColors.Error};
     /* display:none; */
`;

export const StyledForm = styled.div`
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
      .signUp {
        background-color: #ea5455;
        color: #ffffff;
      }
      .logIn {
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


/* background-color: ${MoviesColors.grey};
    color: ${MoviesColors.black};
    position: absolute;
    padding: .5% 2%;
    top: 25%;
    margin-top: 3%;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    width: 35%;
    grid-template-columns: 25% 5% 70%;
    grid-template-rows: repeat(4, 1fr);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7),
    inset 2px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -3px 5px rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    box-sizing: border-box;
`;

export const StyledInput = styled.input`
  margin: 20px 0;
  font-size: 2rem;
  grid-column-start: 1;
  grid-column-end: 4;
  padding: 0.2rem 0.3rem;
`;

export const StyledButton = styled.input`
    font-size: 150%;
    &.up{
        height: 5rem;
        grid-column-start: 1;
        grid-column-end: 4;
        margin: 15px 0;
        background-image: url('https://yosoy.dev/wp-content/uploads/2018/11/Google-Sign-In.png');
        background-position: 47% 50.5%;
        background-size: 128.5% 250%;
        border-radius: .5rem;
        border: 1px solid ${MoviesColors.grey};
    }
    &.left{
        height: 5rem;
        grid-column-start: 1;
        grid-column-end: 2;
        margin: 5px 0;
        background-color: ${MoviesColors.red};
        color: ${MoviesColors.white};
    }
    &.right{
        height: 5rem;
        grid-column-start: 3;
        grid-column-end: 4;
        margin: 5px 0;
        background-color: ${MoviesColors.white};
    } */
