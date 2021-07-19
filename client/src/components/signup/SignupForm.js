import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { StyledForm } from "./SignupFormStyle.js";
import { signUp } from "../../actions/users";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";

export default function SignupForm() {
  const dispatch = useDispatch();

  const history = useHistory();

  const [info, setInfo] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    passMatch: false,
  });


    function handleUsername(e){setInfo({...info, username: e.target.value})}
    function handleEmail(e){setInfo({...info, email: e.target.value})}
    function handlePassword(e){setInfo({...info, password: e.target.value})}

    function PasswordCorroboration(event) {
      const password = info.password;
      const comparation = event.target.value;
      password === comparation
        ? setInfo({ ...info, passMatch: true })
        : setInfo({ ...info, passMatch: false });
    }

  async function SubmitHandler(event) {
    event.preventDefault();
    if (info.passMatch) {
      const response = await dispatch(
        signUp(info.username, info.email, info.password)
      );

      if (response === "Account created") {
        await swal(response, "Success", "success", {
          buttons: false,
          timer: 1000,
        });
        window.location.assign("http://localhost:3000/");
      } else {
        swal(response, "Error", "error", {
          buttons: false,
          timer: 2000,
        });
      }
    } else {
      return swal("Passwords dont match", "Error", "error", {
        buttons: false,
        timer: 2000,
      });
    }
  }

  return (
    <StyledForm>
      <form onSubmit={SubmitHandler}>
        <input type="text" onChange={handleUsername} id="username" placeholder="Username" required/>
        <input type="email" onChange={handleEmail} id="email" placeholder="Email" required/>
        <input type="password" onChange={handlePassword} id="password" placeholder="Password" required/>
        <input type="password" onChange={PasswordCorroboration} id="password-confirm" placeholder="Confirm Password" required/>
        
        <button className="google">
          <FcGoogle size="35" />
          Sign in with Google
        </button>
        <div className="btnContainer">
          <button type="submit" value="Sign up" className="signUp">
            Sign up
          </button>
          <button
            type="button"
            value="Already have an account? Sign in!"
            onClick={() => history.push("/login")}
            className="logIn"
          >
            Log in
          </button>
        </div>
      </form>
    </StyledForm>
  );
}