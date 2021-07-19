import React from "react";
import { StyledDiv, StyledImg } from './styledSlider';

export default function Slider() {
    const combos = {
        1: "https://i.ibb.co/GxfmcdZ/Combo-1.png",
        2: "https://i.ibb.co/Wp39P4b/Combo-2.png",
        3: "https://i.ibb.co/529MBw2/Combo-3.png",
    }
    return(
        <StyledDiv className="slider">
            <StyledDiv className="img-container">
                <StyledImg src={combos[1]} alt="" />
                <StyledImg src={combos[2]} alt="" />
                <StyledImg src={combos[3]} alt="" />
            </StyledDiv>
        </StyledDiv>
    )
}