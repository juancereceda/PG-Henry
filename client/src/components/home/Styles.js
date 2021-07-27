import styled from "styled-components";
import { Link } from "react-router-dom";

// ESTILOS HOME

export const HomeCont = styled.div`
  position: absolute;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContMovies = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 0.5em;
  margin-top: 3.5em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Movies = styled.div`
  margin: 1.25%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Billboard = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  font-size: medium;
  &::-webkit-scrollbar {
    display: block;
  }
`;

export const ComingSoon = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: block;
  }
`;

export const Labels = styled.label`
  margin-bottom: 10px;
  margin-top: 5px;
  color: #e8e8e8;
  font-size: 25px;
  letter-spacing: 5px;
  cursor: pointer;
`;

// export const Stores = styled.div`
//   position: relative;
//   z-index: 100;
//   overflow: hidden;
//   margin: 1.25%;
//   background-color: #30475e;
//   height: 80%;
//   min-height: 500px;
//   width: 15%;
//   max-width: 200px;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   align-items: center;
//   box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7),
//     inset 2px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -3px 5px rgba(0, 0, 0, 0.5);
//   padding: 5px 10px;
// `;

// export const Btn = styled.button`
//   background-color: #f05454;
//   width: 100px;
//   height: 40px;
//   margin-left: 50px;
//   margin-top: 15px;
//   padding-bottom: 10px;
//   justify-content: center;
//   color: #222831;
//   font-size: 15px;
//   border-radius: 10px;
//   border: 1px solid #30475e;
//   cursor: pointer;
//   &:hover {
//     background-color: #e8e8e8;
//     color: #222831;
//     border: 3px solid #f05454;
//   }
// `;

// // ESTILOS MOVIE CARDS

export const Movie = styled.img`
  height: 18em;
  width: 12em;
  object-fit: cover;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

// // ESTILOS MERCH CARDS

export const Linked = styled(Link)`
  text-decoration: none;
  padding: 0.5em;
  margin: 15px 0px 15px 5px;
`;

export const DiscountOffer = styled.div`
  position: absolute;
  top: 0.5em;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin: 10% auto;
  padding: 0;
  line-height: 1.7;
  max-width: 98%;
  background-color: #30475e;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7),
    inset 2px 3px 5px rgba(0, 0, 0, 0.3), inset -2px -3px 5px rgba(0, 0, 0, 0.5);
  border-radius: 0.7em;
  color: #e8e8e8;
`;

export const TestimonialCards = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  p {
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: bold;
  }
  .testimonialcard {
    margin-left: 15px;
    width:250px;
    min-height: 220px;
    border-radius:10%;
    background: #30475E;
  }
  .testimonial-avatar-container {
    // Borramos la foto del feedback
    /* display:none; */
  }
`;
