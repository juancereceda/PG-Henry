import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledDiv, { StyledPaginate } from "./userStyles";
import { getUsers, updateUser } from "../../../actions/users";
import swal from "sweetalert";
import NotFound from "../../404/NotFound";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [statusFilter, setStatusFilter] = React.useState(null);
  const [page, setPage] = React.useState(1)
  const usersCurrent = users?.filter(user => 
      statusFilter === 'Admins' ? user.isAdmin 
      : 
      statusFilter === 'Users' ? !user.isAdmin 
      : 
      statusFilter === 'UserBloqued' ? user.banned
      :
      statusFilter === 'Enabled' ? !user.banned
      : 
      user
  )
  let ultimateUsers = 0
  //search
  const [name, setName] = useState("");
      
  function handleSubmit(e) {
    e.preventDefault();
    setName("");
  }

  //BlockUser
  const ChangeClick = async (user, e) => {
    //console.log('banned: ', user.banned)
    e.preventDefault();
    const blockDisable = await swal({
      title: `Are you sure you want to ${
        user.banned ? "Enabled" : "Blocked"
      }  to ${user.username}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (blockDisable) {
      dispatch(getUsers());
      dispatch(
        updateUser(
          {
            ...user,
            banned: !user.banned,
          },
          user._id
        )
      );
      dispatch(getUsers());
      await swal("The change has been made!", {
        icon: "success",
        buttons: false,
        timer: 1500,
      });
    }
  };

  const handleClick = async (user, e) => {
    e.preventDefault();
    const changeRole = await swal({
      title: `Are you sure you want to change the role ${
        user.isAdmin ? "Admin" : "User"
      }  to ${user.isAdmin ? "User" : "Admin"}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (changeRole) {
      dispatch(getUsers());
      dispatch(
        updateUser(
          {
            ...user,
            isAdmin: !user.isAdmin,
          },
          user._id
        )
      );
      dispatch(getUsers());
      await swal("The change has been made!", {
        icon: "success",
        buttons: false,
        timer: 1500,
      });
    }
  };

  const handleFilterStatus = (e) => {
    setStatusFilter(e.target.value === "All" ? null : e.target.value);
    setPage(1)
  }
  
  return (
    <>
      {window.localStorage.token && users?.length ? 
        <StyledDiv>   
          <table className="container" >
            <thead className="title">
              <div className='titleSearch'>
                <h1>Users registrates</h1> 
                <form onSubmit={(e) => handleSubmit(e)} className="formContainer">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Search Username..."
                    type="text"
                    className="input"
                  />
                </form>
              </div>  
              <tr className="header">
                <td>Username</td>
                <td>Email</td>
                <td>
                  <span> Adm / User </span>
                  <select onChange={(e) => handleFilterStatus(e)}>
                    <option>All</option>
                    <option>Admins</option>
                    <option>Users</option>
                  </select>
                </td>
                <td>                                    
                  <span> Enabled / UserBlocked </span>
                  <select onChange={(e) => handleFilterStatus(e)}>
                    <option>All</option>
                    <option>UserBloqued</option>
                    <option>Enabled</option>
                  </select>
                </td>
              </tr>
            </thead>
            <tbody className="item">
              {usersCurrent?.length ?
                usersCurrent
                  .filter((user) =>
                    name ? user.username.includes(name) : user
                  )
                  .map((user) => 
                      <tr key={user._id} className='center'>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                          <label>Is {user.isAdmin ? 'Admin' : 'User'}</label>
                          <button
                            className='userButton'
                            onClick={(e) => handleClick(user, e)}
                          >
                            {user.isAdmin ? 'ChangeToUser' : 'ChangeToAdmin'}
                          </button>
                        </td>
                        <td>
                          <button
                            className="userButton"
                            onClick={(e) => ChangeClick(user, e)}
                          >
                            {user.banned ? "UserBlocked" : "Enabled"}
                          </button>
                        </td>
                      </tr>
                    )
                    .slice(page * 10 - 10, page * 10)
                  :
                <NotFound />
              } 
              <StyledPaginate className='paginate titleSearch'>
                  <span>Total Users {
                      ultimateUsers = usersCurrent?.length &&
                      usersCurrent
                        .filter((user) =>
                          name ? user.username.includes(name) : user
                        )
                        .map((user) => 
                          <tr key={user._id} className='center'>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                              <label>Is {user.isAdmin ? 'Admin' : 'User'}</label>
                              <button
                                className='userButton'
                                onClick={(e) => handleClick(user, e)}
                              >
                                {user.isAdmin ? 'ChangeToUser' : 'ChangeToAdmin'}
                              </button>
                            </td>
                            <td>
                              <button
                                className="userButton"
                                onClick={(e) => ChangeClick(user, e)}
                              >
                                {user.banned ? "UserBlocked" : "Enabled"}
                              </button>
                            </td>
                          </tr>
                        ).length
                    }       
                  </span>
                  <span>page {page} of {Math.ceil(ultimateUsers/ 10)}</span>
                  <div>
                    <input type='button' value='<<' onClick={() => setPage(1)}/>
                    <input type='button' value='<' onClick={() => (page > 1) && setPage(page - 1)} />
                    <span>{page}</span>
                    <input type='button' value='>' onClick={() => (page < Math.ceil(ultimateUsers/ 10)) && setPage(page + 1)}/>                    
                    <input type='button' value='>>' onClick={() => setPage(Math.ceil(ultimateUsers/ 10))}/>
                  </div>
              </StyledPaginate>    
            </tbody>
          </table>
          
        </StyledDiv>
      :
      <NotFound />
    }
    
    </>
  )
}

export default Users;
