import styled from "styled-components";

const StyledDiv = styled.div`
    color: #ffffff;
   
    h1 {
        font-weight: 800;
        font-size: 2em;
        align-items: center;
    }

    .container {
        background-color: #2d4059;
        box-shadow: 0 0 20px #333;
        margin: 50px auto;
        width: 800px;
        padding: 15px
    }

    .header {
        text-align: center;
    }
    
    .th, td {
        border: solid 1px black;
    }

    .userButton {
        background-color: #f05454;
        width: 97px;
        height: 25px;
        margin: 10px;
        color: #ffffff;
        font-size: 15px;
        border-radius: 12px;
        border: none;
        cursor: pointer;
        &:hover {
          background-color: #d93c3c;
          transition: 0.3s;
        }
    }

    .search {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items:flex-end;
    }    

    .formContainer{
        display: flex;
    }
    
    :placeholder {
        opacity: 0.5;
     }
    
    .input{
        justify-content: flex-end;
        padding: 5px;
        width: 300px;
        border-radius: 10px;
        border: 2px solid #2d4059;
        margin-bottom: 10px;
    }
    
    .input:hover{
        padding: 5px;
        border: 3px solid #2d4059;
    }
    
    .searchBarContainer{
        display: flex;
        margin: 30px
    }
    `;
    
export default StyledDiv;