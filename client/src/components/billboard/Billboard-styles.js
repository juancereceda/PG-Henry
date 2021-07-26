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
  top: 2.5em;
  right: 2em;
  height: 37em;
  width: 15em;
  background-color: #30475e88;
  border: 5px solid #30475e;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-size: large;
  align-items: center;
  text-align: center;  
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

export const Btn = styled.button`
    background-color: #f05454; 
    width: 100px;
    height: 40px;
    margin-left: 50px;
    margin-top: 15px;
    padding-bottom: 10px;
    justify-content: center;
    color: #222831;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid #30475E;
    cursor: pointer;
    &:hover{
        background-color:#E8E8E8;
        color:#222831;
        border: 3px solid #F05454;
        } 
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
