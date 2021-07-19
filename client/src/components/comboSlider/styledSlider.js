import styled from "styled-components";

export const StyledDiv = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .slider{

    }
    @keyframes slide_animation{
        0% {left: 0}
        25% { left:100%; }
        50% { left:200%; }
        75% { left:100%; }
        100% { left:0; }
    }
    .img-container{
        height: 100%;
        width: 300%;
        margin: 0 0 0 -200%;
        position: relative;
        animation-name: slide_animation;
        animation-duration: 15s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-play-state: running;
    }
`;

export const StyledImg = styled.img`
    height: 100%;
    width: 33.3%;
`;