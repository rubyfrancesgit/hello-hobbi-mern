import React, { useState } from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/user';
import { setModalClasses } from '../features/modalClasses';

function LoginForm() {
  const dispatch = useDispatch();
  const modalClasses = useSelector((state) => state.modalClasses.value);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
      e.preventDefault();

      console.log(email, password);

      Axios.post("http://localhost:3001/loginUser", {
          email,
          password
      }).then((response) => {
          console.log(response);

          if (response.data === "User not found. Please register") {
              console.log('NOT logged in');
          } else if (response.data === "Wrong password") {
              console.log('NOT logged in');
          } else {
              console.log("logged in");
              dispatch(login({name: response.data.name, email: response.data.email, profilePictureLink: response.data.profilePictureLink, bio: response.data.bio, age: response.data.age}));

              dispatch(setModalClasses({loginModalClasses: "hide", modalBackgroundClasses: "hide"}));
          }
      });
  }

  return (
    <div className="login-form">
      <h1 className="login-form__heading">Login</h1>

      <form className="login-form__form" onSubmit={loginUser}>
        <div className="login-form__form-div">
          <label className="signup-form__label" htmlFor="loginEmail">Email:</label>
          <input className="login-form__input" type="text" id="loginEmail" placeholder="Email..." onChange={(event) => setEmail(event.target.value)} required />
        </div>

        <div className="login-form__form-div">
          <label className="signup-form__label" htmlFor="loginPassword">Password:</label>
          <input className="login-form__input" type="password" id="loginPassword" placeholder="Password..." onChange={(event) => setPassword(event.target.value)} required />
        </div>

        <button className="login-form__btn" type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm;
