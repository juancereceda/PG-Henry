import styled from 'styled-components';
import {Link} from 'react-router-dom';

// ESTILOS HOME

export const HomeCont = styled.div`
    position: absolute;
    margin-top: 0%;
    top: 25%;
    height: 75%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const ContMovies = styled.div`
    height: 100%;
    width: 100%;
    margin-top: 0%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Movies = styled.div`
    margin: 1.25%;
    height: fill-available;
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const Billboard = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
`;

export const ComingSoon = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
`;

export const Labels = styled.label`
    margin-bottom: 5px;
    margin-top: 5px;
    color: #e8e8e8;
`;

export const Stores = styled.div`
    margin: 1.25%;
    border: solid 1px green;
    height: fill-available;
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

// ESTILOS MOVIE CARDS

// Pendiente de ser borrado, puede ser usado para optimización
export const MovieCont = styled(Link)`
    height: 100%;
    width: 100%;
`;

export const Movie = styled.img`
        height: 100%;
        width: 200%;
        margin-left: 5px;
        margin-right: 5px;
    `;