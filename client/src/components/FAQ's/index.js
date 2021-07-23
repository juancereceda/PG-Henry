import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { StyledFAQs, StyledQuestion ,  StyledAnswer } from './styles';
import { QuestionsAndAnswers as QaAs } from "./Q&A"

export function FAQs () {
    const styledButton = { color: "red", position: "absolute", left: "95%"}
    return (
        <StyledFAQs>
            <h1>Frequently Asked Questions</h1>
            {QaAs.map( QandA => <StyledQuestion key={QaAs.indexOf(QandA)}>
                <h2>{QandA.Q} <FaAngleDown style={styledButton}/> </h2>
                <StyledAnswer key={QaAs.indexOf(QandA.A)}>{QandA.A}</StyledAnswer>
            </StyledQuestion>)}
        </StyledFAQs>
    )
}