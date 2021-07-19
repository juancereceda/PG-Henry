import styled from "styled-components";

const div = styled.div`
  font-family: Questrial;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  color: #e8e8e8;
  margin-bottom: 100px;
  margin-top: 2%;
  .boxContainer {
    padding-bottom: 10px;
    height: 500px;
  }
  .listContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    background-color: #30475e;
    height: 400px;
    padding-top: 1%;
  }
  .scrollbar {
    width: 99%;
    background-color: #30475e;
    overflow-y: scroll;
    height: 95%;
  }
  .listItem {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    height: 24px;
    .userId {
      width: 13%;
      text-align: center;
    }
    .userEmail {
      width: 40%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      select {
        height: 20px;
        margin-left: 5px;
        background-color: #222831;
        color: #e8e8e8;
        border: none;
      }
    }
    .orderTitle {
      color: #f05454;
      font-size: 22px;
    }
    .movieTitle {
      width: 25%;
      text-align: center;
    }
    .paymentStatus {
      display: flex;
      width: 20%;
      align-items: center;
      text-align: center;
      justify-content: center;
      select {
        height: 20px;
        margin-left: 5px;
        background-color: #222831;
        color: #e8e8e8;
        border: none;
      }
    }
  }
  .odd {
    background-color: #222831;
  }

  .approved {
    color: #06b20a;
  }
  .rejected {
    color: #f72702;
  }
  .in_process {
    color: #ffb817;
  }
  .foot {
    display: flex;
    height: 24px;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    margin-top: 15px;
    margin-right: 15px;

    .totalNumber {
      padding: 5px 5px 5px 0px;
    }
    .paginateOrder {
      display: flex;
      justify-content: space-evenly;
      width: 10%;
    }
  }
`;

export default div;
