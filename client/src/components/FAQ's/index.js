import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { StyledFAQs, StyledQuestion ,  StyledAnswer } from './styles';
import { QuestionsAndAnswers as QaAs } from "./Q&A"
import { NavLink } from 'react-router-dom';

export function FAQs () {
    const styledButton = { color: "#F05454", position: "absolute", right: "1%", top: "5%"}

    function auxiliar (el) {
        const linkedText = <NavLink to={el}>here</NavLink>
        return (linkedText);
    }

    function HanldeVisibility (element) {
        console.log(element)
    }

    return (
        <StyledFAQs>
            <h1>Frequently Asked Questions</h1>
            {QaAs.map( QandA => <StyledQuestion key={QaAs.indexOf(QandA)}>
                <div  onClick={HanldeVisibility}>
                    <h2>{QandA.Q}<FaAngleDown style={styledButton}/></h2>
                    <StyledAnswer key={QaAs.indexOf(QandA.A)} answerhidden={false}>
                        <p>{QandA.A.split(' ').map(el => el.includes('http') ? auxiliar(el) : ` ${el} `)}</p>
                    </StyledAnswer>
                </div>
            </StyledQuestion>)}
        </StyledFAQs>
    )
}