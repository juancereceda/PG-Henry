import styled from "styled-components";
import { Link } from "react-router-dom";

// ESTILOS HOME

export const HomeCont = styled.div`
  position: relative;  
  height: auto;  
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContMovies = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: .5em;
  margin-top: 3.5em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Movies = styled.div`
  margin: 1.25%;  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Billboard = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  font-size: medium;
  &::-webkit-scrollbar {
    display: block;
  }
`;

export const ComingSoon = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: block;
  }
`;

export const Labels = styled.label`
  margin-bottom: 5px;
  margin-top: 5px;
  color: #e8e8e8;
  font-size: 15px;
  letter-spacing: 5px;
`;

export const Stores = styled.div`
  position: relative;
  z-index: 100;
  overflow: hidden;
  margin: 1.25%;
  background-color: #30475e;
  height: 80%;
  min-height: 500px;
  width: 15%;
  max-width: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7),
    inset 2px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -3px 5px rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
`;

// ESTILOS MOVIE CARDS

export const Movie = styled.img`
  height: 18em;
  width: 12em;
  object-fit: cover;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

// ESTILOS MERCH CARDS

export const MerchCard = styled.div`
  z-index: 100;
  height: 50%;
  width: 100%;
  border-radius: 5px;
  background-color: #f05454;
  box-shadow: inset 2px 3px 5px rgba(0, 0, 0, 0.3),
    inset -2px -3px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PubliCard = styled.div`
  height: 45%;
  padding: 50% 0;
  width: 100%;
  border-radius: 5px;
  background-color: #f05454;
  box-shadow: inset 2px 3px 5px rgba(0, 0, 0, 0.3),
    inset -2px -3px 5px rgba(0, 0, 0, 0.5);
  text-align: center;
  vertical-align: middle;
`;

export const Icon = styled.img`
  height: 100%;
  width: 100%;
`;

export const Linked = styled(Link)`
  text-decoration: none;
  padding: .5em;
  &:hover {
    border-radius: .8em;
    background-color: #d93c3c;
    transition: 0.3s;
  }
`;

export const DiscountOffer = styled.div`
  position: absolute;
  top: .5em;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin: 0 auto;
  padding: 0;
  line-height: 1.7;
  max-width: 98%;
  background-color: #30475e;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7),
    inset 2px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -3px 5px rgba(0, 0, 0, 0.5);
  border-radius: 0.7em;
  color: #e8e8e8;
`;
