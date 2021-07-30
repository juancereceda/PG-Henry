import styled from "styled-components";

const StyledDiv = styled.div`
    font-family: Questrial;
    color: #E8E8E8;
    .titleSearch {
        width: 502%;
        display: flex;
        text-align: center;
        justify-content: space-between;
        align-items: flex-end;
    }
    .paginate {
        border: solid 1px #222831;
        border-radius: .5em;
    }
    span {
        margin: 1em;
    }
    h1 {
        font-weight: 800;
        font-size: 2em;
        align-items: center;
    }

    select {
        font-family: Questrial;
        background-color: #E8E8E8;
        border: none;
        color: #30475E;
        border-radius: .2em;
        padding: .1em;
        margin: .2em;
    }
    .container {
        table-layout: fixed;
        background-color: #2d4059;
        box-shadow: 0 0 20px #333;
        margin: .8em auto;
        width: 90%;
        padding: 0 2em;
        border-radius: .8em;
    }

    .header {
        text-align: center;
        color: #F05454
    }
    
    .th, td {
        border: solid 1px #222831;
        word-wrap:break-word;
    }

    .userButton {
        background-color: #f05454;    
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
    .userButtonDelete {
        background-color: red;    
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
        border: 2px solid #E8E8E8;
        margin-bottom: 10px;
    }
    
    .input:hover{
        padding: 5px;
        border: 2px solid #30475E;
    }
    
    .center {
        text-align: center;
    }
    `;

    export const StyledPaginate = styled.div`
        font-family: Questrial;
        margin-bottom: 1em;
        input {
            background-color: #F05454;
            border: .1em solid #30475E;
            border-radius: .5em;
        }
        input:hover{
            border: .1em solid #E8E8E8;
            opacity: .5;
        }
    `
    
export default StyledDiv;