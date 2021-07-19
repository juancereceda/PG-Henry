import React, { useState } from "react";
import { verifyUser, verifyToken, changePassword } from "../../actions/users";
import StyledDiv from "./styles";
import swal from "sweetalert";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState({
    first: "",
    second: "",
  });
  const [form, setForm] = useState("first");

  async function handleFirstSubmit(e) {
    e.preventDefault();
    let result = await verifyUser(email);
    if (result === "Email sent") {
      setForm("second");
      let input = document.getElementById("token");
      input.value = "";
    } else {
      swal("No user found with that email", "Error", "error", {
        buttons: false,
        timer: 2000,
      });
    }
  }
  async function handleSecondSubmit(e) {
    e.preventDefault();
    console.log(token);
    let result = await verifyToken(token);
    if (result === "Token is valid") {
      setForm("last");
      let input = document.getElementById("password");
      input.value = "";
    } else {
      swal("Token is not valid", "Error", "error", {
        buttons: false,
        timer: 2000,
      });
    }
  }

  async function handleThirdSubmit(e) {
    e.preventDefault();
    if (password.first === password.second) {
      let result = await changePassword(password.first, token);
      if (result === "Password restored") {
        swal("Password changed successfully!", "Success", "success", {
          buttons: false,
          timer: 2000,
        });
        window.location.assign("http://localhost:3000");
      } else {
        swal(result, "Error", "error", {
          buttons: false,
          timer: 2000,
        });
      }
    } else {
      swal("Passwords don't match", "Error", "error", {
        buttons: false,
        timer: 2000,
      });
    }
  }

  return (
    <StyledDiv>
      {form === "first" ? (
        <form onSubmit={(e) => handleFirstSubmit(e)}>
          <div>
            <h4>Type your email so we can send you</h4>
            <h4>a code to restore your password</h4>
          </div>
          <input
            type="text"
            placeholder="Email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Send email</button>
        </form>
      ) : form === "second" ? (
        <form onSubmit={(e) => handleSecondSubmit(e)}>
          <div>
            <h4>We've sent you an email!</h4>
            <h4>Insert the token provided here</h4>
          </div>
          <input
            type="text"
            placeholder="Token"
            id="token"
            onChange={(e) => setToken(e.target.value)}
          />
          <button>Validate token</button>
        </form>
      ) : form === "last" ? (
        <form onSubmit={(e) => handleThirdSubmit(e)}>
          <div>
            <h4>Now, select your new password</h4>
          </div>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) =>
              setPassword({ ...password, first: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Confirm Password"
            id="secondpassword"
            onChange={(e) =>
              setPassword({ ...password, second: e.target.value })
            }
          />
          <button>Change password</button>
        </form>
      ) : null}
    </StyledDiv>
  );
}

export default ResetPassword;
