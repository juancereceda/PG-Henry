import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import {
  StyledFAQs,
  StyledQuestion,
  StyledAnswer,
  Styledform,
  Btn,
  BtnLarge,
  InputForm,
  TextForm,
} from "./styles";
import { QuestionsAndAnswers as QaAs } from "./Q&A";
import { adminContact } from "../../actions/FAQs";
import swal from "sweetalert";
import { Link } from "react-router-dom";

export function FAQs() {
  const styledButton = {
    color: "#F05454",
    position: "absolute",
    right: "1%",
    top: "5%",
  };

  /* const styledButton = { color: "red", position: "absolute", left: "95%"} */
  /*     const [click, setClick]= useState(false)
    const [info, setInfo]= useState({
        subject:'',
        message:''
    }) */

  function auxiliar(el) {
    const linkedText = (
      <a href={el} target="_blank" rel="noreferrer">
        here
      </a>
    );
    return linkedText;
  }

  function HanldeVisibility(element) {
    if (element.target.tagName === "DIV") {
      let classModifier = element.target.children[1].classList;
      if (classModifier.contains("answerHidden")) {
        classModifier.replace("answerHidden", "answerShow");
      } else {
        classModifier.replace("answerShow", "answerHidden");
      }
    }
  }
  const [click, setClick] = useState(false);
  const [info, setInfo] = useState({
    subject: "",
    message: "",
  });

  function handleSubject(e) {
    setInfo({ ...info, subject: e.target.value });
  }
  function handleMessage(e) {
    setInfo({ ...info, message: e.target.value });
  }

  function handleClick(e) {
    e.preventDefault();
    setClick(!click);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let msg = await adminContact(info.subject, info.message);
    if (msg === "Email sent") {
      await swal(msg, "Success", "success", {
        buttons: false,
        timer: 2000,
      });
      window.location.assign("http://localhost:3000/");
    } else if (msg === "User not found") {
      await swal(msg, "Error", "error", {
        buttons: false,
        timer: 2000,
      });
    } else {
      await swal("You are not logged in!", "Error", "error", {
        buttons: false,
        timer: 2000,
      });
    }
  }
  return (
    <StyledFAQs>
      <h1>Frequently Asked Questions</h1>
      {QaAs.map((QandA) => (
        <StyledQuestion key={QandA.Q}>
          <div onClick={HanldeVisibility} key={QaAs.indexOf(QandA)}>
            <h2 key={QandA}>
              {QandA.Q}
              <FaAngleDown style={styledButton} />
            </h2>
            <StyledAnswer key={QandA.A} className="answerHidden">
              <p>
                {QandA.A.split(" ").map((el) =>
                  el.includes("http") ? auxiliar(el) : ` ${el} `
                )}
              </p>
            </StyledAnswer>
          </div>
        </StyledQuestion>
      ))}
      <Link to="/contact">
        <BtnLarge>
          Didn't find what you were looking for? take it easy, just mail us
        </BtnLarge>
      </Link>
      {/* {click ? (
        <Styledform onSubmit={handleSubmit}>
          <InputForm
            name="subject"
            placeholder="    Subject"
            onChange={handleSubject}
            value={info.subject}
          />
          <TextForm
            name="message"
            placeholder="Write your question, suggestion, concern"
            onChange={handleMessage}
            value={info.message}
          ></TextForm>
          <Btn type="submit">contact us</Btn>
        </Styledform>
      ) : null} */}
    </StyledFAQs>
  );
}
