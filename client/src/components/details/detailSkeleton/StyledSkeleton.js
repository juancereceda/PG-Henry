import styled from "styled-components";

const skeleton = styled.div`
  width: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222831;
  margin: 0px 0px 800px 30px;
  height: 600px;
  .shimmer {
    position: relative;
    background: #3a3a3a;
    background-image: linear-gradient(
      to right,
      #3a3a3a 0%,
      #3f3f3f 10%,
      #4a4a4a 20%,
      #3f3f3f 30%,
      #3a3a3a 50%,
      #3a3a3a 100%
    );
    background-repeat: no-repeat;
    background-size: 800px 300px;

    -webkit-animation-duration: 1s;
    animation-duration: 1s;

    /* Specifies style for element when animation isn't playing */
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: shimmer;
    animation-name: shimmer;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  @-webkit-keyframes shimmer {
    0% {
      background-position: -400px 0;
    }
    100% {
      background-position: 400px 0;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -400px 0;
    }
    100% {
      background-position: 400px 0;
    }
  }

  #square {
    width: 400px;
    height: 500px;
  }

  #content {
    flex: 1;
    //width: 100%;
    //height: 100%;
    padding: 0.5rem 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  #title {
    width: 930px;
    height: 480px;
    margin: 60px 0px 50px 145px;
  }

`;

export default skeleton;
