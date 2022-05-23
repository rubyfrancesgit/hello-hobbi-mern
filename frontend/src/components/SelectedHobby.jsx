import React from 'react'
import { useSelector } from 'react-redux';
import { selectedHobby } from '../features/selectedHobby';

function SelectedHobby() {
  const selectedHobby = useSelector((state => state.selectedHobby.value));

  console.log(selectedHobby);

  return (
    <div>
      <p>Hobbi page</p>

      <p>Session name: {selectedHobby.sessionName}</p>
    </div>
  )
}

export default SelectedHobby;
