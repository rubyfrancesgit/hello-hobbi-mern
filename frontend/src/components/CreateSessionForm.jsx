import Axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function CreateSessionForm() {
    const user = useSelector((state) => state.user.value);

    const [sessionName, setSessionName] = useState("");
    const [city, setCity] = useState("");
    const [lessonPlan, setLessonPlan] = useState("");
    const [whatsIncluded, setWhatsIncluded] = useState("");
    const [sessionPrice, setSessionPrice] = useState(0);
    const [extraGuestPrice, setExtraGuestPrice] = useState(0);
    const [sessionPhotoUpload, setSessionPhotoUpload] = useState("");

    let hostHouse;
    let learnerHouse;
    let publicSetting;
    let extraGuest;
    let sessionImageLink;
    const hostId = user.id;

    // hiding & showing extra guests info 
    const hideShow = () => {
        // --- Not currently in use due to "An invalid form control with name='' is not focusable." Error... come back later ---

        const noOfParticipants = document.getElementById("noOfParticipants");
        const extraGuestPrice = document.getElementById("noOfParticipants");

        if(document.getElementById("yesExtraGuest").checked === true) {
            document.getElementById("noOfParticipantsDiv").classList.remove("hide");
            document.getElementById("extraGuestPriceDiv").classList.remove("hide");

        //     noOfParticipants.setAttribute('required', '');
        //     extraGuestPrice.setAttribute('required', '');
        // }

        // if(document.getElementById("noExtraGuest").checked === true) {
        //     document.getElementById("noOfParticipantsDiv").classList.add("hide");
        //     document.getElementById("extraGuestPriceDiv").classList.add("hide");

        //     noOfParticipants.removeAttribute('required');
        //     extraGuestPrice.removeAttribute('required');
        }
    }

    const createSession = (event) => {
        event.preventDefault();

        // Getting values from form
        if(document.getElementById("hostHouse").checked) {
            hostHouse = true;
        } else {
            hostHouse = false;
        }

        if(document.getElementById("learnerHouse").checked) {
            learnerHouse = true;
        } else {
            learnerHouse = false;
        }

        if(document.getElementById("publicSetting").checked) {
            publicSetting = true;
        } else {
            publicSetting = false;
        }

        if(document.getElementById("yesExtraGuest").checked) {
            extraGuest = true;
        } else {
            extraGuest = false;
        }

        console.log(sessionName, city, lessonPlan, whatsIncluded, sessionPrice, extraGuestPrice, hostHouse, learnerHouse, publicSetting, extraGuest);

        photoCloudUpload();
    }

    const photoCloudUpload = async () => {
        // Cloud store session image
        const uploadSessionImg = new FormData();
        uploadSessionImg.append("file", sessionPhotoUpload);
        uploadSessionImg.append("folder", "helloHobbi/sessionImages");
        uploadSessionImg.append("upload_preset", "eqbewyzt");

        await Axios.post("https://api.cloudinary.com/v1_1/dum8n0mzw/image/upload", uploadSessionImg)
        .then((response) => {
            console.log(response.data.secure_url);
            sessionImageLink = response.data.secure_url;

            storeSession();
        });
    }

    const storeSession = () => {
        console.log('store session');
        // upload session
        Axios.post("http://localhost:3001/createSession", {
            sessionName,
            city,
            lessonPlan,
            whatsIncluded,
            hostHouse,
            learnerHouse,
            publicSetting,
            extraGuest,
            sessionPrice,
            extraGuestPrice,
            sessionImageLink,
            hostId
        }).then((response) => {
            console.log(response.data);
        });
    }

  return (
    <div className="create-session">
      <h1 className="create-session__heading">Create session</h1>

    <form className="create-session__form-container" onSubmit={createSession}>
        <div className="create-session__name-city-div">
            <div className="create-session__form-div">
                <label className="create-session__label" htmlFor="createSessionName">Session name:</label>
                <input className="create-session__input" id="createSessionName" type="text" placeholder="Session name..." onChange={(event) => setSessionName(event.target.value)} required />
            </div>
            <div className="create-session__form-div">
                <label className="create-session__label" htmlFor="createSessionCity">City:</label>
                <input className="create-session__input" id="createSessionCity" type="text" placeholder="City..." onChange={(event) => setCity(event.target.value)} required />
            </div>
        </div>

        <div className="create-session__form-div">
            <label className="create-session__label" htmlFor="lessonPlan">Lesson plan</label>
            <textarea className="create-session__text-area" id="lessonPlan" placeholder="What you???re going to be doing during the session, length of session etc...." autoComplete="off" onChange={(event) => setLessonPlan(event.target.value)} required ></textarea>
        </div>

        <div className="create-session__form-div">
            <label className="create-session__label" htmlFor="whatsIncluded">What's included</label>
            <textarea className="create-session__text-area" id="whatsIncluded" placeholder="The equipment and materials included..." autoComplete="off" onChange={(event) => setWhatsIncluded(event.target.value)} required  ></textarea>
        </div>

        <div className="create-session__form-div">
            <label className="create-session__label">Location options</label>
            <div className="create-session__select-div">
                <input className="create-session__checkbox-input" id="hostHouse" value="hostHouse" type="checkbox" />
                <label className="create-session__label" htmlFor="hostHouse">Host's house</label>
            </div>

            <div className="create-session__select-div">
                <input className="create-session__checkbox-input" id="learnerHouse" value="learnerHouse" type="checkbox" />
                <label className="create-session__label" htmlFor="learnerHouse">Learner's house</label>
            </div>

            <div className="create-session__select-div">
                <input className="create-session__checkbox-input" id="publicSetting" value="publicSetting" type="checkbox" />
                <label className="create-session__label" htmlFor="publicSetting">Public setting</label>
            </div>
        </div>

        <div className="create-session__extra-learner-div">
            <p className="create-session__p">Does this session allow for additional learners?</p>

            <div className="create-session__radio-container">
                <div>
                    <div className="create-session__radio-div">
                        <input className="create-session__radio-input" id="yesExtraGuest" value="yesExtraGuest" name="extraGuest" type="radio" onClick={hideShow} />
                        <label className="create-session__p" htmlFor="extraGuest">Yes</label>
                    </div>

                    <div className="create-session__radio-div">
                        <input className="create-session__radio-input" id="noExtraGuest" value="noExtraGuest" name="extraGuest" type="radio" onClick={hideShow} />
                        <label className="create-session__p" htmlFor="extraGuest">No</label>
                    </div>
                </div>
                
            </div>
        </div>

        <div className="create-session__participant-no-div hide" id="noOfParticipantsDiv">
            <p className="create-session__p">Maximum no. of participants</p>
            <select className="create-session__participant-no" id="noOfParticipants">
                <option value="">  </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>

        <div className="create-session__pricing-container">
            <p className="create-session__p">Session price</p>
            <div className="create-session__pricing-div">
                <div className="create-session__pricing-input-div">
                    <p className="create-session__light-p">$</p>
                    <input className="create-session__number-input" id="sessionPrice" type="number"  onChange={(event) => setSessionPrice(event.target.value)} required />
                    <p className="create-session__light-p">per session</p>
                </div>

                <div className="create-session__pricing-input-div hide" id="extraGuestPriceDiv">
                    <p className="create-session__light-p">$</p>
                    <input className="create-session__number-input" id="extraGuestPrice" type="number"  onChange={(event) => setExtraGuestPrice(event.target.value)}  />
                    <p className="create-session__light-p">per extra guest</p>
                </div>
            </div>
        </div>

        <div className="create-session__photo-upload-container">
            <p className="create-session__p">Session images</p>

            <input className="create-session__img-upload-btn create-session__img-upload-btn-one" id="sessionPicOne" type="file" accept="image/jpg, image/png,image/jpeg" onChange={(event) => setSessionPhotoUpload(event.target.files[0])} />
        </div>

        <div className="create-session__photo-display-container hide">
            <div className="create-session__photo-display" id="photoDisplayOne"></div>
            <div className="create-session__photo-display" id="photoDisplayTwo"></div>
        </div>

        <button type="submit">Create session</button>
    </form>
  
    </div>
  )
}

export default CreateSessionForm;
