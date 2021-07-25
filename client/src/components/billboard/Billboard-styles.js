import styled from "styled-components";

export const StyledTitle = styled.h1`
  color: #e8e8e8;
  font-size: 3rem;
  letter-spacing: .3em;
  padding-left: 1em;;
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
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  height: 3em;
  margin-left: 3em;
  margin-top: auto;
  border: .2em solid #30475e88;
  display: flex;
  justify-content: space-between;
  width: 15%;
  background-color: #f05454;
  border-radius: .7em;
  span {
    text-align: center;
    align-self: center;
    margin-right: 15px;
  }
  & p {    
    text-align: center;
    font-size: 2.1rem;
    line-height: 0;
    color: #222831;
    align-self: center;
  }
`;

export const StyledIndexChanger = styled.button`
  color: #222831;     
  border: none;
  border-radius: .8em;
  background-color: #e8e8e8;
  &:hover {
    border: .1em solid #30475E;
  }
`;
