import React from 'react'
import '../sass/style.scss';
import emptyCheckbox from '../assets/empty-checkbox.svg';
import tickedCheckbox from '../assets/ticked-checkbox.svg';
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import { useSelector } from 'react-redux';


function Hosting() {
    const user = useSelector((state) => state.user.value);

    function checkOne() {
        document.getElementById('emptyCheckboxOne').classList.add('hide');
        document.getElementById('tickedCheckboxOne').classList.remove('hide');
    }
    
    function unCheckOne() {
        document.getElementById('emptyCheckboxOne').classList.remove('hide');
        document.getElementById('tickedCheckboxOne').classList.add('hide');
    }
    
    function checkTwo() {
        document.getElementById('emptyCheckboxTwo').classList.add('hide');
        document.getElementById('tickedCheckboxTwo').classList.remove('hide');
    }
    
    function unCheckTwo() {
        document.getElementById('emptyCheckboxTwo').classList.remove('hide');
        document.getElementById('tickedCheckboxTwo').classList.add('hide');
    }
    
    function checkThree() {
        document.getElementById('emptyCheckboxThree').classList.add('hide');
        document.getElementById('tickedCheckboxThree').classList.remove('hide');
    }
    
    function unCheckThree() {
        document.getElementById('emptyCheckboxThree').classList.remove('hide');
        document.getElementById('tickedCheckboxThree').classList.add('hide');
    }

    return (
        <>
            <Nav />
            <div className="hosting">
                <h1 className="hosting__h1">Host a session</h1>

                <p className="hosting__p">Three things you need to be a Hobbi host:</p>

                <form className="hosting__form" action="#">
                    <div className="hosting__div">
                        <img className="hosting__checkbox" onClick={checkOne} id="emptyCheckboxOne" src={emptyCheckbox} alt="unchecked checkbox" />

                        <img className="hosting__checkbox hide" onClick={unCheckOne} id="tickedCheckboxOne" src={tickedCheckbox} alt="ticked checkbox" />

                        <label className="hosting__p" htmlFor="hostingCheckbox1"><b>Experience</b> - you don’t need to be an expert by any means! But you’ve got to know your way around the hobby you teach - at least enough to show a beginner.</label>
                    </div>

                    <div className="hosting__div">
                        <img className="hosting__checkbox" onClick={checkTwo} id="emptyCheckboxTwo" src={emptyCheckbox} alt="unchecked checkbox" />

                        <img className="hosting__checkbox hide" onClick={unCheckTwo} id="tickedCheckboxTwo" src={tickedCheckbox} alt="ticked checkbox" />

                        <label className="hosting__p" htmlFor="hostingCheckbox1"><b>Equipment</b> - if you’re teaching a hobby that requires equipment or materials, you’ll need this for the session. Plan out any equipment you need ahead of time.</label>
                    </div>

                    <div className="hosting__div">
                        <img className="hosting__checkbox" onClick={checkThree} id="emptyCheckboxThree" src={emptyCheckbox} alt="unchecked checkbox" />

                        <img className="hosting__checkbox hide" onClick={unCheckThree} id="tickedCheckboxThree" src={tickedCheckbox} alt="ticked checkbox" />

                        <label className="hosting__p" htmlFor="hostingCheckbox1"><b>Teaching</b> - Hobbi is all about learning new skills, so you’ll have to be comfortable teaching people. If you don’t have official teaching experience, no worries! You can always start by teaching a friend first.</label>
                    </div>
                </form>

                {user && 
                    <Link to="/create-session"  className="hosting__btn">Create session</Link>
                }

                {!user && 
                    <button className="hosting__btn-msg">Please login or sign up to create a session</button>
                }
                
                <p className="hosting__contact">Not sure if you’re a good fit? 
                    Get in contact and we can talk it through with you!
                    <br />Email us at hobbi@gmail.com</p>
            </div>
        </>
        
    )
}

export default Hosting
