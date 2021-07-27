import styled from "styled-components";

const skeleton = styled.div`
  height: 18em;
  width: 14em;
  object-fit: cover;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #30475e;
  display: flex;
  align-items: center;
  justify-content: center;
  .loader {
    margin: auto;
    height: 30px;
    width: 30px;
  }
  .loader > div {
    height: inherit;
    width: inherit;
    position: absolute;
  }
  .loader > div > div {
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background: #d7d7d7;
    position: absolute;
    top: 0%;
    right: 50%;
    transform: translate(50%, 0%) scale(0);
    animation-name: scale;
    animation-duration: 1.1s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
  }
  .loader > div:nth-child(2) {
    transform: rotate(30deg);
  }
  .loader > div:nth-child(3) {
    transform: rotate(60deg);
  }
  .loader > div:nth-child(4) {
    transform: rotate(90deg);
  }
  .loader > div:nth-child(5) {
    transform: rotate(120deg);
  }
  .loader > div:nth-child(6) {
    transform: rotate(150deg);
  }
  .loader > div:nth-child(7) {
    transform: rotate(180deg);
  }
  .loader > div:nth-child(8) {
    transform: rotate(210deg);
  }
  .loader > div:nth-child(9) {
    transform: rotate(240deg);
  }
  .loader > div:nth-child(10) {
    transform: rotate(270deg);
  }
  .loader > div:nth-child(11) {
    transform: rotate(300deg);
  }
  .loader > div:nth-child(12) {
    transform: rotate(330deg);
  }
  .loader > div:nth-child(2) > div {
    animation-delay: 0.1s;
  }
  .loader > div:nth-child(3) > div {
    animation-delay: 0.2s;
  }
  .loader > div:nth-child(4) > div {
    animation-delay: 0.3s;
  }
  .loader > div:nth-child(5) > div {
    animation-delay: 0.4s;
  }
  .loader > div:nth-child(6) > div {
    animation-delay: 0.5s;
  }
  .loader > div:nth-child(7) > div {
    animation-delay: 0.6s;
  }
  .loader > div:nth-child(8) > div {
    animation-delay: 0.7s;
  }
  .loader > div:nth-child(9) > div {
    animation-delay: 0.8s;
  }
  .loader > div:nth-child(10) > div {
    animation-delay: 0.9s;
  }
  .loader > div:nth-child(11) > div {
    animation-delay: 1s;
  }
  .loader > div:nth-child(12) > div {
    animation-delay: 1.1s;
  }
  @keyframes scale {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;

export default skeleton;
