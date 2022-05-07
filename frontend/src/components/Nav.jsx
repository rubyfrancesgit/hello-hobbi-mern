import React, { useState, useContext } from 'react'
// import { GlobalContext } from '../context/GlobalContext';
// import LoginForm from '../components/LoginForm';
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  // const { user, setSelectedUser, loginModalClasses, setLoginModalClasses, modalBackgroundClasses, setModalBackgroundClasses } = useContext(GlobalContext);

  let navigate = useNavigate();

  function launchLoginModal() {
      // setModalBackgroundClasses("modal-background");
      // setLoginModalClasses("modal");
  } 

  function closeModal() {
      // setModalBackgroundClasses("modal-background hide");
      // setLoginModalClasses("modal hide");
  }

  return (
    <div className="nav">
      <Link to="/" className="nav__heading">Hello Hobbi</Link>

      <div className="nav__btn-div">
          <button className="nav__login-btn" onClick={launchLoginModal}>Login</button>
          <Link to="/sign-up" className="nav__register-btn">Register</Link>
      </div>
    </div>
  )
}

export default Nav
