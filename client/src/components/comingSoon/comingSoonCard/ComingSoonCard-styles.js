import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 19%;
  width: 18.1%;
  margin: 20px;
  height: 580px;
  border-radius: 5px;
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0);
  padding: 10px;
  box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.24);
  -webkit-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 5px 5px 12px 5px rgba(0, 0, 0, 0.24);
  transition: all 0.25s;
  color: #e8e8e8;
  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }

  a {
    display: flex;
    flex-direction: column;
    margin: 5%;
    text-decoration: none;
    color: #e8e8e8;
  }

  img {
    height: 18em;
    width: 12em;
    object-fit: cover;
    margin-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  h2 {
    display: flex;
    flex-direction: row;
    text-align: center;
    font-size: 1.8rem;
    text-shadow: 0.5rem 0.5rem 0.3rem #222831;
    height: 50px;
    align-items: center;
  }
  p {
    margin-left: 1vw;
    margin-right: 1vw;
    text-align: justify;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h4 {
    margin-left: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: #f05454;
  }

  background-color: #30475e88;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7),
    inset 2px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -3px 5px rgba(0, 0, 0, 0.5);
`;
