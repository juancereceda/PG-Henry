import styled from "styled-components";

export const StyledFAQs = styled.div`
    width: 80%;
    margin: 50px auto;
    padding: 10px 20px;
    border: 1px solid black;
    background-color: #30475e;
    color: #e8e8e8;
    display: flex;
    flex-direction: column;
    & > h1 {
        line-height: 0;
        margin: 50px;
        align-self: center;
    }
    border-radius: 50px;
`;

export const StyledQuestion = styled.div`
    position: relative;
    margin: 10px 5px;
    background: #293949;
    border-radius: 25px 100px 25px 100px / 25px 100px 25px 100px;
    z-index: 10;
    & >div{
        position: relative;
        padding: 15px 0;
        background-color: transparent;
    }
    div:hover{
        cursor: pointer;
    }
    div h2{
        margin: 10px 25px;
        line-height: .5;
        position: relative;
        margin-bottom: 15px;
        z-index: -1;
    }
`;



export const StyledAnswer = styled.div`
    &.answerHidden{
        margin: 0;
        padding: 0;
        line-height: 0rem;
        font-size: 0rem;
        & > p, a{
            color: #293949;
        }
    }
    &.answerShow{
        margin: 20px 50px 10px 50px;
        padding: 0 25px;
        text-align: justify;
        z-index: -1;
        a{
            color: #F05454;
        }
    }
    transition: all 350ms ease-in-out;
`;

export const BtnLarge = styled.button`
    font-family: Questrial;
    font-size: 20px;
    height: 50px;
    border: none;
    border-radius: 50px 100px 50px 100px / 25px 50px 25px 50px;
    h2{
        margin-bottom: 25px;
    }
    box-shadow: 
    inset 2px 3px 5px rgba(0, 0, 0, 0.3),
    inset -2px -3px 5px rgba(0, 0, 0, 0.5);
    background-color: #ea5455;
    
    &:hover {
        background-color: #e5e5e5;
        box-shadow: 
        inset -2px -3px 5px rgba(0, 0, 0, 0.3),
        inset 2px 3px 5px rgba(0, 0, 0, 0.5);
    }
    `;

export const Styledform = styled.form`
       
       position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 5px 0;
        padding: 2px 25px;
        border: 1px solid #293949;
        background: #293949;
        line-height: .7;
        border-radius: 50px 100px 50px 100px / 25px 50px 25px 50px;
        h2{
            margin-bottom: 25px;
        }
        `;

export const InputForm= styled.input`
    text-align: center;
    margin: 15px 0;
    height: 25px;
    border-radius: 50px 100px 50px 100px / 25px 50px 25px 50px;
    h2{
        margin-bottom: 25px;
    }
    `
export const TextForm= styled.textarea`
    text-align: center;
    padding: 50px;
    margin: 10px 0;
    height: 70px;
    border-radius: 50px 100px 50px 100px / 25px 50px 25px 50px;
    h2{
        margin-bottom: 25px;
        }
`
 export const Btn = styled.button`
    margin-left: 30rem ;
    align-items: center;
    font-family: Questrial;
    font-size: 20px;
    height: 50px;
    width: 135px;
    border: none;
    border-radius: 10px;
    box-shadow: 
       inset 2px 3px 5px rgba(0, 0, 0, 0.3),
       inset -2px -3px 5px rgba(0, 0, 0, 0.5);
    background-color: #ea5455;
            
    &:hover {
        background-color: #e5e5e5;
        box-shadow: 
           inset -2px -3px 5px rgba(0, 0, 0, 0.3),
           inset 2px 3px 5px rgba(0, 0, 0, 0.5);
        }
  `;
