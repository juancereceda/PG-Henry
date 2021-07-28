import styled from "styled-components";

export const StyledTitle = styled.h1`
  color: #e8e8e8;
  font-size: 3rem;
  letter-spacing: 0.3em;
  padding-left: 1em; ;
`;

export const StyledBillboard = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  /* top: 30%; */
  left: 0.5%;
  right: 1%;
  align-items: center;
  z-index: -100;
  font-family: "Questrial", sans-serif;
`;

export const StyledHeader = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledAside = styled.aside`
  position: absolute;
  top: 1em;
  right: 1em;
  height: 37em;
  width: 15em;
  background-color: #30475e;
  border: 5px solid #293949;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: large;
  align-items: center;
  text-align: center;
  padding-bottom: 10px;
`;

export const StyledPagination = styled.div`
  height: 3em;
  position: absolute;
  left: 35%;
  bottom: 315px;
  border: 0.2em solid #30475e88;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15%;
  background-color: #293949;
  border-radius: 0.5em;
  span {
    text-align: center;
    align-self: center;
    margin-right: 15px;
  }
  & p {
    text-align: center;
    font-size: 2.1rem;
    line-height: 0;
    color: #e8e8e8;
    align-self: center;
  }
  .plusminus {
    color: #222831;
    border: none;
    border-radius: 0.5em;
    height: 70%;
  }

  .enabledIndex {
    cursor: pointer;
    &:hover {
      transform: scale(0.95);
      filter: opacity(50%);
      transition: 200ms ease-in-out;
    }
  }
`;

export const Btn = styled.button`
  background-color: #293949;
  display: flex;
  width: 100px;
  height: 40px;
  margin-left: 50px;
  margin-top: 15px;
  justify-content: center;
  text-align: justify;
  align-items: center;
  color: #e8e8e8;
  font-size: 15px;
  border-radius: 10px;
  border: 1px solid #30475e;
  cursor: pointer;
  &:hover {
    background-color: #e8e8e8;
    color: #293949;
    border: 1px solid #293949;
    transition: 500ms;
  }
`;

export const StyledIndexChanger = styled.button`
  color: #222831;
  border: none;
  border-radius: 0.5em;
  height: 99%;
  cursor: pointer;
  &:hover {
    transform: scale(0.95);
    filter: opacity(50%);
    transition: 200ms ease-in-out;
  }
`;

export const BillboardContainer = styled.div`
  .btn-container {
    display: flex;
    justify-content: space-between;
    margin: 5% 0 0 2%;
    width: 75%;
    .sorting-btns {
      display: flex;
    }
  }
`;

export const ComingSoonContainer = styled.div`
  .btn-container {
    display: flex;
    justify-content: space-between;
    margin: 2% 0 3% 2%;
    width: 75%;
    .sorting-btns {
      display: flex;
    }
  }
`;
