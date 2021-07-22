import styled from "styled-components";

export const StyledTitle = styled.h1`
  color: #e8e8e8;
  font-size: 5rem;
  line-height: 0;
`;

export const StyledBillboard = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  top: 30%;
  left: 1%;
  right: 1%;
  align-items: center;
  z-index: -100;
  margin: auto;
  font-family: "Questrial", sans-serif;
`;

export const StyledHeader = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledAside = styled.aside`
  position: absolute;
  top: 1%;
  right: 1%;
  height: 700px;
  width: 16%;
  background-color: #30475e88;
  border: 5px solid #30475e;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledPagination = styled.div`
  position: relative;
  margin: 0;
  padding: 5px;
  border: 2px solid #30475e88;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  width: 10%;
  background-color: #f05454;
  border-radius: 15px;
  & p {
    grid-column: 2/3;
    text-align: center;
    font-size: 2.1rem;
    line-height: 0;
    color: #222831;
  }
`;

export const StyledIndexChanger = styled.input`
  color: #222831;
  margin: 0;
  padding: 0;
  font-size: 1.7rem;
  text-align: center;
  vertical-align: middle;
  border: 2px solid #222831;
  border-radius: 15px;
  background-color: #e8e8e8;
  &.plus {
    grid-column: 1/2;
  }
  &.minus {
    grid-column: 3/4;
  }
`;
