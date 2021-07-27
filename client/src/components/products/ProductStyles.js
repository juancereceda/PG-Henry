import styled from 'styled-components';

export const ProductBox = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    height:fit-content;
    margin:10px;
    min-width:200px;
    min-height:352px;
    padding: 15px;
    font-size: 1.4em;    
    background-color: rgb(48, 71, 94);
    .deleteBtn{
        border-radius: 5px;
        border:none;
        height: 20px;
        width:20px;
        font-size: 13px;
        background-color: rgb(234, 84, 85);
        color:rgb(232, 232, 232);
        .delete{
            color: rgb(234, 84, 85);
            font-size: 0;
        }
        &:hover{
            color:rgb(232, 232, 232);
            background-color: rgba(234, 84, 85, 0.7);
            .delete{
            font-size: 13px;
        }
        };
    }
`;

export const InfoBox = styled.div`
    display:block;   
    justify-content: center;
    align-items: center;

    #ctn {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`;
export const TextBox = styled.div`
    display:flex;
    flex-direction:column; 
    color:rgb(232, 232, 232);
    font-family: Questrial;

    #cnt {
        margin-bottom: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    };

    #inp {
        width: 50%;
        height: 75%;
        border: none;
        border-radius: 5px;
    };

    .btn {
        margin-bottom: 5.5px;
    }
`;
export const Text = styled.div`
    display:flex;
    justify-content: center;
`;

export const ImgBox = styled.div`
    margin-top: 5px;
`;
export const Price = styled.div`
    color: rgb(234, 84, 85);
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    margin:5px;
`;
export const ButtonBox = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    height:60x;
    width:190px;
    font-size: 2.0em;
    border-radius: 20px;
    background-color: rgba(234, 84, 85, 1);
    
`;
export const Button = styled.button`
    color:rgb(232, 232, 232);
    width:40px;
    background-color:rgba(234, 84, 85, 1);
    border-radius: 20px;
    font-size: 30px;
    border:none;    
    &:hover{
        background-color:rgba(45, 64, 89, 0.3);
    }
`;
export const CounterBox = styled.div`
    color:rgb(34, 40, 49);
    height:52px;
    width:40px;
    margin:4px;
    background-color: rgb(232, 232, 232); 
`;
export const Counter = styled.p`
    margin:0px 0px 9px 11px;
    color:rgb(34, 40, 49);
    font-size: 35px;
`;
export const Center = styled.div`
    display:flex;
    justify-content: center;
`;

export const AdminButton = styled.button`
    height: 75%;
    border-radius: 5px;
    margin-top: 6px;
    background-color: #E8E8E8;
    color: #222831;
    box-shadow: inset 2px 3px 5px rgba(0, 0, 0, 0.3),
                inset -2px -3px 5px rgba(0, 0, 0, 0.5);
    border: none;
    &:focus {
        box-shadow: inset -2px -3px 5px rgba(0, 0, 0, 0.3), inset 2px 3px 5px rgba(0, 0, 0, 0.5);
    }
`;