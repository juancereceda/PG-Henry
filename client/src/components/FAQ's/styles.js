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
  & > div {
    position: relative;
    padding: 15px 0;
    background-color: transparent;
  }
  div:hover {
    cursor: pointer;
  }
  div h2 {
    margin: 10px 25px;
    line-height: 0.5;
    position: relative;
    margin-bottom: 15px;
    z-index: -1;
  }
`;

export const StyledAnswer = styled.div`
  &.answerHidden {
    margin: 0;
    padding: 0;
    line-height: 0rem;
    font-size: 0rem;
    position: relative;
    z-index: -1;
    & > p,
    a {
      color: #293949;
    }
  }
  &.answerShow {
    margin: 20px 50px 10px 50px;
    padding: 0 25px;
    text-align: justify;
    a {
      color: #f05454;
    }
  }
  transition: all 350ms ease-in-out;
`;

export const BtnLarge = styled.button`
  font-family: Questrial;
  font-size: 20px;
  height: 50px;
  border: none;
  border-radius: 50px 100px 50px 100px / 25px 50px 25px 50px;
  h2 {
    margin-bottom: 25px;
  }
  box-shadow: inset 2px 3px 5px rgba(0, 0, 0, 0.3),
    inset -2px -3px 5px rgba(0, 0, 0, 0.5);
  background-color: #ea5455;

  &:hover {
    background-color: #e5e5e5;
    box-shadow: inset -2px -3px 5px rgba(0, 0, 0, 0.3),
      inset 2px 3px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const Styledform = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 70%;
  margin: 5px auto;
  padding: 2px 25px;
  border: 1px solid #293949;
  background: #293949;
  line-height: 0.7;
  border-radius: 15px;
  h2 {
    margin-bottom: 25px;
  }
`;

export const InputForm = styled.input`
  text-align: center;
  margin: 15px 0;
  height: 40px;
  border-radius: 15px;
  h2 {
    margin-bottom: 25px;
  }
`;
export const TextForm = styled.textarea`
  text-align: justify;
  padding: 20px 0px 0px 20px;
  margin: 10px 0;
  height: 100px;
  border-radius: 15px;
  h2 {
    margin-bottom: 25px;
  }
`;
export const Btn = styled.button`
  margin: 0 auto;
  align-items: center;
  font-family: Questrial;
  font-size: 20px;
  height: 60px;
  width: 150px;
  border: none;
  border-radius: 10px;
  box-shadow: inset 2px 3px 5px rgba(0, 0, 0, 0.3),
    inset -2px -3px 5px rgba(0, 0, 0, 0.5);
  background-color: #ea5455;

  &:hover {
    background-color: #e5e5e5;
    box-shadow: inset -2px -3px 5px rgba(0, 0, 0, 0.3),
      inset 2px 3px 5px rgba(0, 0, 0, 0.5);
  }
`;
