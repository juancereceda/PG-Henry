import styled from 'styled-components';

export const Revs = styled.div`
    height: auto;
    width: 30%;
    margin: 15px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    background-color: #30475E;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7),
                inset 2px 3px 5px rgba(0, 0, 0, 0.3),
                inset -2px -3px 5px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .tit {
        color: #E8E8E8;
    };

    form {
        display: flex;
        flex-direction: column;
        width: 100%;

        #esc {
            width: 100%;
        }
    }
    
    #send {
        margin-top: 5px;
        width: 25%;
        align-self: flex-end;
        background-color: #F05454;
        color: #E8E8E8;
        border-radius: 5px;
        opacity: 1;
        box-shadow:
                inset 2px 3px 5px rgba(0, 0, 0, 0.3),
                inset -2px -3px 5px rgba(0, 0, 0, 0.5);

    &:focus {
        box-shadow:
                inset -2px -3px 5px rgba(0, 0, 0, 0.3),
                inset 2px 3px 5px rgba(0, 0, 0, 0.5);
    }
    }

`;