import styled from 'styled-components';
import {IoIosArrowDown as Arrow} from 'react-icons/io'

const desktopStartWidth = 996;
// const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;


export const Box = styled.label`
  
  display:block;
  text-align: justify;
  width:50em;
  color: #E8E8E8;
  padding-left: 1rem;
  ${mobile}{
      width:100%;
  }
`;

export const Container =styled.div`
  background-color: #222831;
`;

export const Btn = styled.button`
   margin-left: 250px;
   margin-top:100px;
   display: flex;
   direction: row;
   padding-top: 10px;
   padding-bottom: 10px;
   justify-content: center;
   align-items: right;
   margin-top: 100px;
   color: #222831; 
   background:#F05454;
   border: 3px solid #30475E;
   border-radius: 12px;
   width: 250px;
   height: 55px;
   font-size: 30px; 
   &:hover{
   background-color:#E8E8E8;
   color:#222831;
   border: 3px solid #F05454;
   } 
`;

export const Grid = styled.div`
   display:grid;
   grid-template-columns:50% 50%;
   padding: 10px;
`;

export const Poster = styled.img`
   margin: auto;
   width: 400px;
   height: 500px;
   padding: 0rem 0.5rem 0.5rem 1rem;
`;

export const SubH2 = styled.h2`
   color: #F05454;
   padding:1rem 1rem 0rem;
   text-align: left;
   margin: 0%;
`;

export const Title = styled.h1`
  margin-top: 0px;
  padding-left: 0.2rem;
  padding-bottom: 0rem;
  font-size: 25px;
  color:#E8E8E8;
`;

export const Trailer = styled.div`
   margin: 80px 1px 18px -210px;
`;

export const Rated = styled.div`
  display:flex;
  text-align: center;
  width:120%;
  margin-left: 10rem;
  color:#E8E8E8;  
`;

export const H4 = styled.h4`
  padding-left:25px;
  padding-right: 10px;
  color:#F05454;
`;

export const Label = styled.label`
  padding:20px;
`;

export const ArrowDown = styled(Arrow)`
  padding-left: 20px;
`;

export const Show = styled.div`
   width: 60%;
   display:grid;
   grid-template-columns:30% 30% 30%;
   margin-left: 170px;
   padding-left: 20px;
   `;

export const Inp = styled.input`
    background-color: #E8E8E8;
    box-sizing: border-box;
    border-radius: 8px;
    &:focus{
      color:#E8E8E8;
      background: #30475E00;
      border: 2px solid #30475E;
    }
`;

export const TH3 = styled.h3`
   color: #30475E; 
   margin-left: 350px;
`;

export const Confirm = styled.button`
   margin-top: 30px;
   margin-left: 300px;
   background-color: #F05454;
   color: #222831;
   border-radius: 8px;
   border: 3px solid #30475E;
   width: 10rem;
   height: 2rem;
   font-size: 1rem;
   font-weight: 100;

   &:hover{
     background-color: #222831;
     color:#E8E8E8;
   }
`;

export const Edit = styled.div`
  margin-left: 20px;
  .edit {
    color: white;
    height: 18px;
    width: 18px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
      transition: 0.2s;
    }
`;
