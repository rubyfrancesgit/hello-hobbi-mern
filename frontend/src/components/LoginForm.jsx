import React, { useContext, useState } from 'react';
import Axios from "axios";
// import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/user';

function LoginForm() {
  const dispatch = useDispatch();
  // const { setUser, setLoginModalClasses, setModalBackgroundClasses  } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

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
              // setUser(response.data);
              // setLoginModalClasses("hide");
              // setModalBackgroundClasses("hide");
              dispatch(login({name: response.data.name, email: response.data.email, profilePictureUrl: response.data.profilePictureLink, bio: response.data.bio, age: response.data.age}));
          }
      });
  }

  return (
    <div className="login-form">
      <h1 className="login-form__heading">Login</h1>

      <form className="login-form__form" onSubmit={loginUser}>
        <div className="login-form__form-div">
          <label className="signup-form__label" htmlFor="email">Email:</label>
          <input className="login-form__input" type="text" id="email" placeholder="Email..." onChange={(event) => setEmail(event.target.value)} required />
        </div>

        <div className="login-form__form-div">
          <label className="signup-form__label" htmlFor="password">Password:</label>
          <input className="login-form__input" type="password" id="password" placeholder="Password..." onChange={(event) => setPassword(event.target.value)} required />
        </div>

        <button className="login-form__btn" type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm;
