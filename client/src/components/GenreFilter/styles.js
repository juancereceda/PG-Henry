import styled from "styled-components";

export const StyleFilter= styled.div`
   box-sizing: border-box;
   position: absolute;
   top: 1%;
   left: 1%;
   width: 15%;
   margin: 0;
   padding: 0;
   & select{
      width: 100%;
      font-size: 2.5rem;
      border-top: 20px solid #E8E8E8;
      border-bottom: 20px solid #E8E8E8;
      border-image: url("https://www.clipartmax.com/png/full/1-10009_onlinelabels-clip-art-movie-tape-cinta-de-pelicula-dibujo.png") 40 round;
      background-color: #E8E8E8;
      margin: 0;
      padding: 0;
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