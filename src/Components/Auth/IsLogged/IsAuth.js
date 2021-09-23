import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function IsAuth() {
  const [isLogged, setIsLogged] = useState(
    window.sessionStorage.getItem("jwt")
      ? window.sessionStorage.getItem("jwt")
      : null
  );

  const [user,setUser]=useState(
    window.sessionStorage.getItem("user")
      ? window.sessionStorage.getItem("user")
      : null
  );

 

  const history = useHistory();
  
  console.log(user)

  const handleLogout = () => {
    window.localStorage.removeItem("jwt");
    window.sessionStorage.removeItem("jwt");
    history.push("/login");
  };

  return (
    <ul style={{marginLeft:"20px"}} >
      {isLogged ? (
        <li className="drop-nav">
          <a href="#" className="avatar">
            <div className="postss__first">
        <div className="posts__first__img">
          <img src="./images/avatar.png" alt="profile img" />
        </div>
        <div className="posts__first__name">
        {/* <i class="fas fa-bell"></i> */}
          <strong className="userStyle" style={{fontSize:"13px"}}>Mohamed Ali</strong> 
        </div>
        
      </div>
          </a>
          <ul className="dropdown" style={{justifyContent:"space-between"}} >
            <li>
              <a href="/profile" style={{marginBottom:"10px"}}><i class="fas fa-id-badge"></i> Profile</a>
            </li>
            <li>
              <a onClick={handleLogout}><i class="fas fa-sign-out-alt"></i> Logout</a>
            </li>
          </ul>
        </li>
      ) : (
        <li>
          <a className="userStyle" href="/login">
            <i className="fas fa-user  userStyle"></i> <span className="userStyle" >Sign in</span>
          </a>
        </li>
      )}
    </ul>
  );
}

export default IsAuth;
