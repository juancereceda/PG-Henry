import styled from 'styled-components';

const desktopStartWidth = 996;
// const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;


export const Box = styled.label`
  
  display:block;
  text-align: justify;
  width:48em;
  color: #E8E8E8;
  padding-left: 0.5rem;
  ${mobile}{
      width:100%;
  }
`;

export const Container =styled.div`
      background-color: #222831;
    
`;

export const Btn = styled.button`
   margin-top: 100px;
   color: #222831; 
   background:#F05454;
   border: 3px solid #30475E;
   border-radius: 12px;
   width: 200px;
   height: 50px;
   font-size: 30px;

   &:hover{
   background:#E8E8E8;
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
`;

export const Title = styled.h1`
  margin-top: 200px;
  padding-left: 0.2rem;
  padding-bottom: 0rem;
  font-size: 25px;
  color:#E8E8E8;
`;

export const Trailer = styled.div`
   margin: 245px 1px 18px -110px;
`;

export const Rated = styled.div`
  display:flex;
  text-align: center;
  width: 100%;
  margin-left: 15rem;
  color:#E8E8E8;  
`;
export const H4 = styled.h4`
  padding-left:30px;
  padding-right: 10px;
  color:#F05454;
`;