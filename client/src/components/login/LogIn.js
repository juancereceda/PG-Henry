import React, { useState } from "react";
import swal from "sweetalert";
import StyledContainer from "./LogInStyles";
import { logIn, logInWithGoogle } from "../../actions/users";
import { useDispatch } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

function LogIn() {
  const dispatch = useDispatch();
  const [logInState, setLogInState] = useState({
    name: "",
    password: "",
  });

  async function responseGoogle(response) {
    let message = await dispatch(logInWithGoogle(response.tokenId));
    if (message === "Logged in succesfully") {
      await swal(message, "Logged", "success", {
        buttons: false,
        timer: 2000,
      });
      window.location.assign("http://localhost:3000/");
    } else if (message === "Invalid Password") {
      swal(
        "There is no existing user with this Google Account. Sign Up first!",
        "No Logged!",
        "error",
        {
          buttons: true,
        }
      );
    }else if (
      message ===
      "Your Password has been reset to protect your account, you'll be redirected to restore your password"
    ) {
      let resetPassword = await swal({
        title: message,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });
      if (resetPassword) {
        await swal("Redirecting", {
          icon: "success",
          buttons: false,
          timer: 1500,
        });
        window.location.assign("http://localhost:3000/restorepassword");
      }
    } else {
      swal(message, "No Logged!", "error", {
        buttons: false,
        timer: 3000,
      });
    }
  }

  function handleInputChange(e) {
    setLogInState({
      ...logInState,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogInSubmit(e) {
    e.preventDefault();
    if (logInState.name && logInState.password) {
      let message = await dispatch(logIn(logInState.name, logInState.password));
      if (message === "Logged in succesfully") {
        await swal(message, "Logged", "success", {
          buttons: false,
          timer: 2000,
        });
        window.location.assign("http://localhost:3000/");
      }else if(message === "Your Password has been reset to protect your account, you'll be redirected to restore your password"){
        let resetPassword =  await swal({
          title: message,
          icon: "warning",
          buttons: true,
          dangerMode: true,
            });
          if(resetPassword) {
            await swal("Redirecting", {
              icon: "success",
              buttons: false,
              timer: 1500
            });
            window.location.assign("http://localhost:3000/restorepassword")
          }

      } else {
        swal(message, "No Logged!", "error", {
          buttons: false,
          timer: 3000,
        });
      }
    } else {
      !logInState.name && !logInState.password
        ? await swal(
            "Required credentials!",
            "Add name or email and password",
            "warning",
            {
              buttons: false,
              timer: 3000,
              className: "swal-overlay",
            }
          )
        : !logInState.name
        ? await swal(
            "Required name or email!",
            "Add name or email",
            "warning",
            {
              buttons: false,
              timer: 3000,
            }
          )
        : await swal("Required password!", "Add password", "warning", {
            buttons: false,
            timer: 3000,
          });
    }
  }

  return (
    <StyledContainer>
      <form onSubmit={(e) => handleLogInSubmit(e)}>
        <input
          type="text"
          placeholder="Username/email"
          name="name"
          onChange={(e) => handleInputChange(e)}
          required
        />
        <div className="passwordCnt">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleInputChange(e)}
            required
          />
          <Link to="/restorepassword" className="passwordLink">
            <span>Forgot your password?</span>
          </Link>
        </div>
        <GoogleLogin
          clientId="901553802516-s4lqslbl590f3bq5bklbgql27p4ktcqe.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              className="google"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FcGoogle size="35" />
              Login with Google
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={() => {
            swal("Failed to log in", "Error", "error", {
              buttons: false,
              timer: 3000,
            });
          }}
          cookiePolicy={"single_host_origin"}
          className="google"
        />
        <div className="btnContainer">
          <button type="submit" className="logIn">
            Log in
          </button>
          <button
            type="button"
            className="signUp"
            onClick={() =>
              window.location.assign("http://localhost:3000/signup")
            }
          >
            Sign Up
          </button>
        </div>
      </form>
    </StyledContainer>
  );
}

export default LogIn;
