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
  .totalRow {
    display: flex;
  }
  .totalCnt {
    display: flex;
    flex-direction: column;
    align-items: center;
    .couponCnt {
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background-color: #30475e;
      width: 300px;
      height: 200px;
      input {
        font-family: Questrial;
        height: 30%;
        width: 90%;
        background-color: #e8e8e8;
        color: #000000;
        padding-left: 10%;
        font-size: 20px;
      }
      button {
        font-family: Questrial;
        height: 30%;
        width: 90%;
        background-color: #f05353;
        border: none;
        color: #e8e8e8;
        border-radius: 20px;
        font-size: 22px;
        &:hover {
          background-color: #d93c3c;
          transition: 0.3s;
        }
      }
    }
  }
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
export const AddProduct = styled.div`
  display: flex;
  justify-content: center;
  height: 352px;
  margin: 10px;
  min-width: 200px;
  padding: 15px;
  font-size: 1.4em;
  background-color: rgb(48, 71, 94);
  .addButton {
    width: 100%;
    height: 100%;
    border: none;
    outline: 0;
    background-color: transparent;
    font-size: 100px;
    border: none;
    color: rgba(255, 255, 255, 0.5);
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
  .submit {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    .submitBtn {
      background-color: rgba(34, 40, 49, 1);
      border: none;
      outline: 0;
      color: rgba(255, 255, 255, 1);
      height: 25px;
      &:hover {
        background-color: rgba(34, 40, 49, 0.7);
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
  .input {
    margin-top: 30px;
  }
`;
export const Nothing = styled.h1`
  color: rgba(255, 255, 255, 1);
  margin-top: 60px;
  font-family: Questrial;
  font-size: 40px;
  margin-left: 30%;
`;
