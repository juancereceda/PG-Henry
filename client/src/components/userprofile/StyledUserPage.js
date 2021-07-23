import styled from "styled-components";

const div = styled.div`
  font-family: Questrial;
  color: #e8e8e8;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5%;

  button {
    font-family: Questrial;
    font-size: 1.1em;
    border: none;
    background-color: #222831;
    color: #F05454;
    opacity: .6;
    &:hover {
      opacity: 1;
      transition: .1s;
    }
  }

  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export default div;
