import React, {useEffect} from "react";
import {
  getTokenLocalStorage,
  getUserDataStorage,
} from "../../reducer/reducer";
import StyledUserPage from "./StyledUserPage";
import Reservations from "./Reservations";
import NotFound from "../404/NotFound";
import {deleteAccount} from '../../actions/users';
import { useDispatch } from "react-redux";


function UserProfile() {
  const dispatch = useDispatch();
  const token = getTokenLocalStorage();
  const user = getUserDataStorage();

  // useEffect(()=>{
  //   dispatch(deleteAccount());
  // },[dispatch])
  
  function handleDelete(e){
    e.preventDefault()
    dispatch(deleteAccount());
  }

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
      <button type='submit' onClick={handleDelete}>Delete Account</button>
    </StyledUserPage>
  );
}

export default UserProfile;
