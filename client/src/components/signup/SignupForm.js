import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { StyledForm } from "./SignupFormStyle.js";
import { signUp, signUpWithGoogle } from "../../actions/users";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";
import { GoogleLogin } from "react-google-login";


export default function SignupForm() {
  const dispatch = useDispatch();

  const history = useHistory();

  const [info, setInfo] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    passMatch: false,
    passwordReset:false,
  });

  function handleUsername(e) {
    setInfo({ ...info, username: e.target.value });
  }
  function handleEmail(e) {
    setInfo({ ...info, email: e.target.value });
  }
  function handlePassword(e) {
    setInfo({ ...info, password: e.target.value });
  }

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

  async function responseGoogle(response) {
    const result = await dispatch(signUpWithGoogle(response.tokenId));
    if (result === "Account created") {
      await swal("Connected with Google successfully", "Success", "success", {
        buttons: false,
        timer: 1000,
      });
      window.location.assign("http://localhost:3000/");
    } else {
      swal(result, "Error", "error", {
        buttons: false,
        timer: 2000,
      });
    }
  }

  return (
    <StyledForm>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          onChange={handleUsername}
          id="username"
          placeholder="Username"
          required
        />
        <input
          type="email"
          onChange={handleEmail}
          id="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          onChange={handlePassword}
          id="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          onChange={PasswordCorroboration}
          id="password-confirm"
          placeholder="Confirm Password"
          required
        />

        <GoogleLogin
          clientId="901553802516-s4lqslbl590f3bq5bklbgql27p4ktcqe.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className="google"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FcGoogle size="35" />
              Sign up with Google
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={() => {
            swal("Failed to connect with Google", "Error", "error", {
              buttons: false,
              timer: 3000,
            });
          }}
          cookiePolicy={"single_host_origin"}
          className="google"
        />
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
