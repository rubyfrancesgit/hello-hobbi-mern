import React, { useContext, useEffect, useState } from 'react';
import { Image } from "cloudinary-react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/user';

// components
import Nav from '../components/Nav';

function UserProfile() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    console.log(user);

    let navigate = useNavigate();

    const logoutUser = async () => {
        await dispatch(login(null));
        navigate("/");
    }

  return (
    <>
      <Nav />
      <div className="profile">
        <div className="profile__info-container">
          <Image className="profile__img" cloudName="dum8n0mzw" publicId={user.profilePictureLink} />

          <div className="profile__info-div">
            <h1 className="profile__heading">Hey I'm {user.name}</h1>
            <p className="profile__light-p">{user.bio}</p>

            <div className="profile__btn-div">
              <button className="profile__edit-profile">Edit profile</button>
              <p className="profile__light-p" onClick={logoutUser}>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
