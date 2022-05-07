import React, { useState } from 'react';
import Axios from "axios";

function SignUpForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");
    const [age, setAge] = useState(0);
    const [profileUpload, setProfileUpload] = useState("");

    let profilePictureLink;

    const createUser = async (e) => {
        e.preventDefault();

        console.log(name, email, password, age, bio, profileUpload);

        // check if email is taken
        Axios.post("http://localhost:3001/checkUserEmail", {
            email
        }).then((response) => {
            console.log(response.data);
            if (response.data === "Email already taken") {
            console.log("Try signing in")
            } else {
            photoCloudUpload();
            }
        });
    }

    const photoCloudUpload = async () => {
        // Cloud store profile img
        const updloadIProfile = new FormData();
        updloadIProfile.append("file", profileUpload);
        updloadIProfile.append("folder", "hobbiProfilePictures");
        updloadIProfile.append("upload_preset", "eqbewyzt");
    
        await Axios.post("https://api.cloudinary.com/v1_1/dum8n0mzw/image/upload", updloadIProfile)
        .then((response) => {
            console.log(response.data.secure_url);
            profilePictureLink = response.data.secure_url;
        });

        storeUser();
    }

    const storeUser = () => {

        // Register user
        Axios.post("http://localhost:3001/createUser", {
              name,
              email,
              password,
              age,
              bio,
              profilePictureLink
          }).then((response) => {
              console.log(response.data);
          });
      }

  return (
    <div className="signup-form">
        <h1 className="signup-form__heading">Sign up</h1>
      
        <form className="signup-form__form" onSubmit={createUser}>
            <div className="signup-form__form-div">
                <label className="signup-form__label" htmlFor="name">Name:</label>
                <input className="signup-form__input" id="name" type="text" placeholder="Name..." onChange={(event) => setName(event.target.value)} required />
            </div>

            <div className="signup-form__form-div">
                <label className="signup-form__label" htmlFor="email">Email:</label>
                <input className="signup-form__input" id="email" type="text" placeholder="Email..." onChange={(event) => setEmail(event.target.value)} required />
            </div>

            <div className="signup-form__form-div">
                <label className="signup-form__label" htmlFor="password">Password:</label>
                <input className="signup-form__input" id="password" type="password" placeholder="Password..." onChange={(event) => setPassword(event.target.value)} required />
            </div>

            <div className="signup-form__form-div">
                <label className="signup-form__label" htmlFor="Age">Age:</label>
                <input className="signup-form__input" id="Age" type="number" placeholder="Age..." onChange={(event) => setAge(event.target.value)} required />
            </div>

            <div className="signup-form__form-div">
                <label className="signup-form__label" htmlFor="Bio">Bio:</label>
                <input className="signup-form__input" id="Bio" type="text" placeholder="Bio..." onChange={(event) => setBio(event.target.value)} required />
            </div>

            <div className="signup-form__form-div">
                <label className="signup-form__label" htmlFor="profilePicture">Profile picture:</label>
                <input className="signup-form__input" id="profilePicture" type="file" placeholder="Photo link one..." onChange={(event) => setProfileUpload(event.target.files[0])} />
            </div>

            <button className="signup-form__submit" type="submit">Sign up</button>
        </form>
    </div>
  )
}

export default SignUpForm
