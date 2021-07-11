import React, { useState, useEffect } from 'react';
import { getTokenLocalStorage } from "../../reducer/reducer";
import { NavBarAlpha, SignButton, Cart, Linked } from './Styles';
import { isAdmin, logOut} from '../../actions/users';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';


export default function NavBar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const token = getTokenLocalStorage();
  /*   let [viewForm] = useState(false); */
    let [admin, setAdmin] = useState(null);
    
    useEffect(() => {
        let verifyAdmin = async () => {
            const authorized = await isAdmin();
            setAdmin(authorized)
        }
        verifyAdmin();
    },[])

async function handleLogOut() {  
    let willLogOut =  await swal({
  title: "Are you sure you want to log out?",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
  if (willLogOut) {
    await swal("You've been logged out!", {
      icon: "success",
    });
    dispatch(logOut())
    window.location.reload()
  } else {
    swal("Welcome back!");
  }  
}

  /*   function handleClick (e) {
        e.preventDefault();
        setViewForm(viewForm = true);
    } */

    // Hasta añadir funcionalidad on close al reducer
    // function onClose(e) {
    //     e.preventDefault();

    //     setViewForm(viewForm = false);
    // }

    return (
        <NavBarAlpha>
            <div><Linked to='/'>Home</Linked></div>
            <div><Linked to='/billboard'>Billboard</Linked></div>
            <div><Linked to='/comingsoon'>Coming Soon</Linked></div>
            <div><Linked to='/contact'>Contact</Linked></div>
            <div><Linked to='/merch'>Merchandaising</Linked></div>
            <Linked to='/products'><Cart size="25" /></Linked>
          { 
                admin ? 
                <div className='accountLogout'>
                    <Linked to='/administration'>Admin</Linked> 
                     <img className='logout' alt="" src='https://res.cloudinary.com/juancereceda/image/upload/v1625936866/logout_nt6exa.png'onClick={() => handleLogOut()}/>
                </div>
                
                : token && admin === false
                ? 
                <div className='accountLogout'>
                    <Linked to='/profile'>Account</Linked>
                    <img className='logout' alt="" src='https://res.cloudinary.com/juancereceda/image/upload/v1625936866/logout_nt6exa.png'onClick={() => handleLogOut()}/>
                </div> 
                : <Linked><SignButton onClick={() => history.push('/login')}>Sign In / Sign Up</SignButton></Linked>
          }
           {/*  {!viewForm ? true : <SignForm />} */}
        </NavBarAlpha>
    )
}