import React from "react";
import { getTokenLocalStorage } from "../../reducer/reducer";
import StyledUserPage from "./StyledUserPage";
function UserProfile() {
  const token = getTokenLocalStorage();
  return (
    <StyledUserPage>
      {token ? (
        <h1>Welcome back, user!</h1>
      ) : (
        <div className="errorCnt">
          <img
            className="sadFace"
            src="https://res.cloudinary.com/juancereceda/image/upload/v1625945361/sad-face-in-rounded-square_q7qmr7.png"
            alt="404"
          />
          <h1 className="errorMsg">
            You are not logged in! Please come back as a user
          </h1>
        </div>
      )}
    </StyledUserPage>
  );
}

export default UserProfile;
