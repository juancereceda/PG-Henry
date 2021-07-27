import styled from "styled-components";

const AdminContainer = styled.div`
  font-family: Questrial;
  display: flex;
  justify-content: center;

  .errorCnt {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #e8e8e8;
    margin-top: 5%;
    .sadFace {
      width: 150px;
    }
  }
  .isAdmin {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
  }
  .boxTitle {
    color: #f05454;
    text-decoration: none;
    font-size: 1.5em;
  }
  .movieBox {
    margin: 10px;
    background-color: #2d4059;
    padding: 0px 5px 5px 25px;
  }

  .movieList {
    overflow-y: scroll;
    width: 500px;
    height: 300px;
    color: #ffffff;
  }
  .boxContainer {
    display: flex;
    margin-top: 30px;
    width: 98%;
    justify-content: space-evenly;
    align-items: center;
  }

  .swapButton {
    height: 75px;
    width: 75px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
      transition: 0.2s;
    }
  }

  .movieCnt {
    display: flex;
    justify-content: space-between;
    .checkMovie {
      display: flex;
      h4 {
        margin-left: 5px;
        margin-top: 0px;
      }
      input {
        margin-top: 0px;
      }
    }
    .removeEdit {
      margin-right: 10px;
      display: flex;
      .remove {
        background-color: #f05353;
        color: white;
        height: 18px;
        width: 18px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        &:hover {
          opacity: 0.5;
          transition: 0.2s;
        }
      }
      .edit {
        height: 18px;
        width: 18px;
        margin-left: 5px;
        cursor: pointer;
        &:hover {
          opacity: 0.5;
          transition: 0.2s;
        }
      }
    }
  }

  .userBox {
    margin: 30px 10px 300px 100px;
    width: 180px;
    background-color: #2d4059;
    padding: 0px 5px 5px 5px;
    .boxTitle {
      padding-left: 10px;
    }
  }
  .link {
  color: #f05454;
  text-decoration: none;
  font-size: 1.5em;
  text-align: center;
    &:hover{
      color: #e8e8e8;
      font-size: 1.52em;
      transition: 300ms;
    };
  }
  .postMovieForm {
    background-color: #2d4059;
    height: 1200px;
    width: 850px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 50px;
    padding-bottom: 20px;
  }

  .formInputContainer {
    display: flex;
    justify-content: space-evenly;
    color: #ffffff;
    input {
      height: 35px;
      width: 280px;
      padding-left: 10px;
      font-family: Questrial;
      background-color: #c4c4c4;
      color: #222831;
    }
  }
  .formInputContainerCheck {
    display: flex;
    color: #ffffff;
    input {
      margin-left: 100px;
      height: 35px;
      width: 35px;
      font-family: Questrial;
      background-color: #c4c4c4;
      color: #222831;
    }
    label{
      font-size: 18px;
      margin-left: 10px;
    }
    h4{
      margin-left: 100px;
    }
    .time{
      margin-left: 230px;
    }
  }

  .postMovieButton {
    background-color: #f05454;
    width: 240px;
    height: 60px;
    margin-top: 40px;
    color: #ffffff;
    font-size: 18px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: #d93c3c;
      transition: 0.3s;
    }
  }
`;

export default AdminContainer;
