import '../sass/style.scss';
import bulbEducation from '../assets/bulb-education.svg'
import calendar from '../assets/calendar.svg'
import brushCamera from '../assets/brush-camera.svg'

function HowItWorks() {
    return (
        <div className="how-it-works">
            <h2 className="how-it-works__h2">How it works</h2>

            <div className="how-it-works__container">
                <div className="how-it-works__div">
                    <img className="how-it-works__img how-it-works__bulb-education" src={bulbEducation} alt="lightbulb and graduation cap icons"></img>
                    <p className="how-it-works__p">Connect with hobbiests to learn new skills, hands-on & in-person.</p>
                </div>

                <div className="how-it-works__div">
                    <img className="how-it-works__img how-it-works__calendar" src={calendar} alt="calendar icon"></img>
                    <p className="how-it-works__p">Flexible learning: Book sessions whenever it works best for you.</p>
                </div>

                <div className="how-it-works__div">
                    <img className="how-it-works__img" src={brushCamera} alt="paint brush and camera icons"></img>
                    <p className="how-it-works__p">Helping you get better access to equipment, materials & tutors.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;