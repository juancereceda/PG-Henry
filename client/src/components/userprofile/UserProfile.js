import React from "react";
import {
  getTokenLocalStorage,
  getUserDataStorage,
} from "../../reducer/reducer";
import StyledUserPage from "./StyledUserPage";
import Reservations from "./Reservations";
import NotFound from "../404/NotFound";

function UserProfile() {
  const token = getTokenLocalStorage();
  const user = getUserDataStorage();
  return (
    <StyledUserPage>
      {token ? (
        <>
          <h1>Welcome back, {user.username}!</h1>
          <Reservations />
        </>
      ) : (
        <NotFound />
      )}
    </StyledUserPage>
  );
}

export default UserProfile;
