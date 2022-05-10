import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import { setModalClasses } from '../features/modalClasses';

function Nav() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const modalClasses = useSelector((state) => state.modalClasses.value);

  let navigate = useNavigate();

  function launchLoginModal() {
    dispatch(setModalClasses({loginModalClasses: "modal", modalBackgroundClasses: "modal-background"}));
  } 

  function closeModal() {
    dispatch(setModalClasses({loginModalClasses: "hide", modalBackgroundClasses: "hide"}));
  }

  return (
    <div className="nav">
      <Link to="/" className="nav__heading">Hello Hobbi</Link>

      

      {user && 
      <div className="nav__right-div">
        <button className="nav__outline-btn">Teach a hobbi</button>

        <Link to="/user-profile" className="nav__user-div">
          <img className="nav__profile-img" src={user.profilePictureLink} alt="Your profile picture" />

          <p className="nav__p">{user.name}</p>
        </Link>
      </div>}

      {!user && 
      <div className="nav__btn-div">
        <button className="nav__outline-btn" onClick={launchLoginModal}>Login</button>
        <Link to="/sign-up" className="nav__solid-btn">Register</Link>
      </div>}

      <div className={modalClasses.loginModalClasses}>
          <LoginForm />
      </div>

      <div className={modalClasses.modalBackgroundClasses} onClick={closeModal}></div>
    </div>
  )
}

export default Nav
