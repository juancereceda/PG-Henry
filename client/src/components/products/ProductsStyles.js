import styled from "styled-components";

export const ProductsBox = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
`;
export const Container = styled.div`
  background-color: rgba(34, 40, 49, 1);
  width: auto;
`;
export const MovieData = styled.div`
  display: flex;
  flex-direction: row;
  .parkingLot {
    margin-right: 2%;
  }
`;
export const MovieDetails = styled.div`
  position: static;
  font-size: 24px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 2%;
  color: rgba(255, 255, 255, 1);
  font-family: Questrial;
  display: flex;
  flex-direction: column;
`;
export const ParkingLot = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 780px;
  height: 315px;
  background-color: rgb(48, 71, 94);
`;
export const ParkingLine = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Screen = styled.div`
  margin: 5px 0 5px 0;
  display: flex;
  justify-content: center;
  border-radius: 6px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(234, 84, 85, 1);
`;
export const Reference = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
`;

export const RedText = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  margin-left: 10px;
  color: rgb(234, 84, 85);
  font-family: Questrial;
  font-size: 30px;
`;
export const BuyBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 50px;
  margin-bottom: 10px;
  .notLogged {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f05353;
    label {
      margin-bottom: 10px;
      a {
        color: #f05353;
      }
    }
    .disabledBtn {
      margin: 0px 30px 10px 10px;
      color: #686868;
      font-family: Questrial;
      font-size: 30px;
      background-color: #9a9a9d;
      border: none;
      border-radius: 10px;
      width: 100px;
      height: 70px;
    }
  }
`;
export const BuyButton = styled.button`
  margin: 0 30px 30px 10px;
  color: rgba(255, 255, 255, 1);
  font-family: Questrial;
  font-size: 30px;
  background-color: rgba(234, 84, 85, 1);
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 70px;
  &:hover {
    background-color: rgba(234, 84, 85, 0.7);
  }
`;
export const Total = styled.p`
  color: rgba(255, 255, 255, 1);
  margin-top: 20px;
  font-family: Questrial;
  font-size: 30px;
`;
export const StoredProducts = styled.p`
  color: rgba(255, 255, 255, 1);
  margin-top: 30px;
  font-family: Questrial;
  font-size: 20px;
  margin-right: 7px;
`;
