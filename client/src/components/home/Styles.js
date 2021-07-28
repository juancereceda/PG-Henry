import styled from "styled-components";
import { Link } from "react-router-dom";

// ESTILOS HOME

export const ContCar = styled.div`
  position: relative;
  height: 100%;
  width: 80%;
  margin-top: 2em;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  button.rec-dot {
    box-shadow: 0 0 1px 3px #293949;
  }
  .rec.rec-arrow {
    background-color: #293949;
    &:hover {
      background-color: #e8e8e8;
    }
  }
`;

export const Linked = styled(Link)`
  text-decoration: none;
  padding: 2em;
  margin: 0px 0px 15px 10px;
`;

export const Labels = styled.label`
  margin-bottom: 10px;
  margin-top: 5px;
  color: #e8e8e8;
  font-size: 25px;
  letter-spacing: 5px;
  cursor: pointer;
`;

// // ESTILOS MOVIE CARDS

export const Movie = styled.img`
  height: 20em;
  width: 13em;
  padding: 10px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
`;

// // ESTILOS MERCH CARDS

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
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Poppins";
    font-size: 18px;
    font-weight: bold;
  }
  .testimonialcard {
    margin-left: 15px;
    width: 250px;
    min-height: 200px;
    border-radius: 10%;
    background: #30475e;
  }
  .testimonial-avatar-container {
    // Borramos la foto del feedback
    /* display:none; */
  }
`;
