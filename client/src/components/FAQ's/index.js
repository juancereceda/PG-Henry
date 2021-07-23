import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { StyledFAQs, StyledQuestion ,  StyledAnswer } from './styles';
import { QuestionsAndAnswers as QaAs } from "./Q&A"
import { NavLink } from 'react-router-dom';

export function FAQs () {
    const styledButton = { color: "red", position: "absolute", right: "0", top: "0"}

    function auxiliar (el) {
        console.log(el)
        const asdf = <a href={el}>asdf</a>
        console.log(asdf)
        return (asdf);
    }

    return (
        <StyledFAQs>
            <h1>Frequently Asked Questions</h1>
            {QaAs.map( QandA => <StyledQuestion key={QaAs.indexOf(QandA)}>
                <h2>{QandA.Q}<FaAngleDown style={styledButton}/></h2>
                <StyledAnswer key={QaAs.indexOf(QandA.A)}>
                    <p>{QandA.A.split(' ').map(el => el.includes('http') ? auxiliar(el) : el)}</p>
                </StyledAnswer>
            </StyledQuestion>)}
        </StyledFAQs>
    )
}