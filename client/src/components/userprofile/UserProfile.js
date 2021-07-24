import React from "react";
import {
  getTokenLocalStorage,
  getUserDataStorage,
} from "../../reducer/reducer";
import StyledUserPage from "./StyledUserPage";
import Reservations from "./Reservations";
import NotFound from "../404/NotFound";
import { deleteAccount } from "../../actions/users";
import swal from "sweetalert";
import Reviews from "./Reviews";

function UserProfile() {
  const token = getTokenLocalStorage();
  const user = getUserDataStorage();

  async function handleDelete(e) {
    e.preventDefault();
    swal("Are you sure you want to do this?", {
      buttons: ["No way!", true],
    }).then(async (value) => {
      if (value) {
        let msg = await deleteAccount();
        if (msg === "Account Deleted") {
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("userdata");
          await swal(msg, "Success", "error", {
            buttons: false,
            timer: 3000,
          });
          window.location.assign("http://localhost:3000/");
        }
      } else {
        return swal("we couldn't delete your acount", "Error", "error", {
          buttons: false,
          timer: 3000,
        });
      }
    });
  }

  return (
    <StyledUserPage>
      {token ? (
        <>
          <h1>Welcome back, {user.username}!</h1>
          <div className="row">
          <Reservations />
          <Reviews />
          </div>
        </>
      ) : (
        <NotFound />
      )}
      <button type="submit" onClick={handleDelete}>
        Delete Account
      </button>
    </StyledUserPage>
  );
}

export default UserProfile;
