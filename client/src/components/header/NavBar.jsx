import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars,FaTimes } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { getTokenLocalStorage, getUserDataStorage } from "../../reducer/reducer";
import { NavBarAlpha, SignButton, Cart, Linked } from './Styles';
import { isAdmin, logOut} from '../../actions/users';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';


export default function NavBar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const token = getTokenLocalStorage();
    const user = getUserDataStorage();
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
      buttons: false,
      timer: 1500
    });
    dispatch(logOut())
    window.location.reload()
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
      <ResponsiveMenu
        menuOpenButton={<FaBars size='25'/>}
        menuCloseButton={<FaTimes size='25'/>}
        changeMenuOn='700px'
        largeMenuClassName='large-menu-classname'
        smallMenuClassName='small-menu-classname'
        menu = {
          <ul>
            <li><Linked to='/'>Home</Linked></li>
            <li><Linked to='/billboard'>Billboard</Linked></li>
            <li><Linked to='/comingsoon'>Coming Soon</Linked></li>
            <li><Linked to='/contact'>Contact</Linked></li>
            <li><Linked to='/faqs'>FAQ's</Linked></li>
            <li><Linked to='/products'><Cart size="25" /></Linked></li>
            { 
              admin ? 
              <li className='accountLogout'>
                  <Linked to='/administration'>Admin</Linked> 
                    <img className='logout' alt="" src='https://res.cloudinary.com/juancereceda/image/upload/v1625936866/logout_nt6exa.png'onClick={() => handleLogOut()}/>
              </li>
              
              : token && admin === false
              ? 
              <li className='accountLogout'>
                  <Linked to='/profile'>{user.username}</Linked>
                  <img className='logout' alt="" src='https://res.cloudinary.com/juancereceda/image/upload/v1625936866/logout_nt6exa.png'onClick={() => handleLogOut()}/>
              </li> 
              : <li><Linked><SignButton onClick={() => history.push('/login')}>Sign In / Sign Up</SignButton></Linked></li>
            }
            {/*  {!viewForm ? true : <SignForm />} */}
          </ul>
        }
      />
    </NavBarAlpha>
  )
}