import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { selectHobby } from '../features/selectedHobby';
import { useNavigate } from 'react-router-dom';

function AvailableHobbies() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [listOfHobbies, setListOfHobbies] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/allHobbies")
            .then((response) => {
                setListOfHobbies(response.data);
                console.log(response.data);
            });
    }, []);

  return (
    <div className="available-hobbies">
        <h2 className="available-hobbies__heading">Available hobbies</h2>
      {listOfHobbies.map((hobby) => {
          return(
            <div className="available-hobbies__div" key={hobby._id} onClick={() => {dispatch(selectHobby({sessionName: hobby.sessionName, sessionId: hobby._id})); navigate("/hobbi-session")}}>
                <img className="available-hobbies__img" src={hobby.sessionImageLink} alt="Hobby image" />

                <div className="available-hobbies__text-div">
                    <p className="available-hobbies__session-name">{hobby.sessionName}</p>
                    <p className="available-hobbies__city">{hobby.city}</p>
                </div>
            </div>
          );
      })}
    </div>
  )
}

export default AvailableHobbies
