import styled from "styled-components";

export const StyleFilter= styled.div`   
   width: 20%;
   & select{
      width: 100%;
      font-size: 1.5rem;
      border-top: .8em solid #E8E8E8;
      border-bottom: .8em solid #E8E8E8;
      border-image: url("https://www.clipartmax.com/png/full/1-10009_onlinelabels-clip-art-movie-tape-cinta-de-pelicula-dibujo.png") 45 round;
      background-color: #E8E8E8;
      cursor: pointer;
      :hover{
         background-color: transparent;
         color: #E8E8E8;
         padding: 2px 0px 2px 15px;
      }
      :focus{
         outline: none;
      }
      transition: all .5s;
   }
   & select option{
      background-color: #222831;
      color: #E8E8E8;
      width: 100%;
      :hover{
         background-color: #222831;
         opacity: 0.2;
      }
   }
`;