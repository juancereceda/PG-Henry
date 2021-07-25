import React,{useState} from "react";
import { FaAngleDown } from "react-icons/fa";
import { StyledFAQs, StyledQuestion ,  StyledAnswer, Styledform, Btn, BtnLarge, InputForm, TextForm } from './styles';
import { QuestionsAndAnswers as QaAs } from "./Q&A"
import { NavLink } from 'react-router-dom';
import { adminContact } from "../../actions/FAQs";
import swal from "sweetalert";


export function FAQs () {
    const styledButton = { color: "#F05454", position: "absolute", right: "1%", top: "5%"}

    function auxiliar (el) {
        const linkedText = <NavLink to={el}>here</NavLink>
        return (linkedText);
    }

    function HanldeVisibility (element) {}
    const [click, setClick]= useState(false)
    const [info, setInfo]= useState({
         subject:'',
         message:''
    })

    function handleSubject(e){setInfo({...info, subject: e.target.value})}
    function handleMessage(e){setInfo({...info, message: e.target.value})}

    function handleClick(e){
        e.preventDefault()
        setClick(!click)
    }

    async function handleSubmit(e){
        e.preventDefault()
        let msg = await adminContact(info.subject, info.message)
        if(msg === 'Email sent'){
          await swal(msg, "Success", "success", {
            buttons: false,
            timer: 2000,
          });
        window.location.assign("http://localhost:3000/");
        }
        else if(msg === 'User not found'){
            await swal(msg, "Error", "error", {
                buttons: false,
                timer: 2000,
              });
        }
        else{
           await swal("We couldn't send your message", "Error", "error", {
            buttons: false,
            timer: 2000,
          });
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
            <BtnLarge onClick={handleClick}>didn't find what you were looking for? take it easy, just mail us</BtnLarge>
            {click? 
              <Styledform onSubmit={handleSubmit}>
                <InputForm name='subject' placeholder='    Subject' onChange={handleSubject} value={info.subject}/> 
                <TextForm name='message' placeholder='    Write your question, suggestion, concern' onChange={handleMessage} value={info.message}></TextForm>
                <Btn type='submit'>contact us</Btn>
              </Styledform>
              :
              null}
        </StyledFAQs>
    )
}