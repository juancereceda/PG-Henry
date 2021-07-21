import styled from "styled-components";

export const StyledSlider = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 50;
    display: flex;
    & > div{
        min-height: 100%;
        min-width: 100%;
        margin-right: 50px;
    }
    transition: .3s ease all;
    z-index: 100;
`;

export const SliderImg = styled.img`
    position: relative;
    margin: 5%;
    height: 90%;
    width: 90%;
`;

export const SliderText = styled.div``;