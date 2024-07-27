import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import defaultImg from '../../assets/pet-default-image.png';
import AgeConversion from '../AgeConversion/AgeConversion';
import PetCalendar from '../PetCalendar/PetCalendar';
import './PetProfile.scss';

const API = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function PetProfile({ currentPet }) {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  function showModal() {
    setClicked((prevClick) => !prevClick);
  }

  function handleDelete() {
    fetch(`${API}/pets/${currentPet.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete pet');
        }
        navigate('/index');
      })
      .catch((error) => console.error('Error:', error));
  }

  return (
    <div className="PetProfile">
      <h1>{currentPet.name}</h1>
      <div className="wrapper">
        <div className="img-container">
          <img src={defaultImg} alt="" />
        </div>
        <div className="flex">
          <div className="info-container">
            <p>{currentPet.gender}</p>
            <p>{currentPet.age}</p>
            <p>{currentPet.weight} lbs</p>
            <p>{currentPet.isvaccinated ? 'Vaccinated' : 'Not vaccinated'}</p>
            <p>Existing Conditions: {currentPet.existingconditions}</p>
          </div>
          <div className="button-container">
            <Link to={`/edit-pet/${currentPet.id}`}>
              <button className="action-button">Edit</button>
            </Link>
            <button className="action-button" onClick={showModal}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="calendar">
        <PetCalendar />
        <AgeConversion species={currentPet.species} age={currentPet.age} />
      </div>
      <div className={`delete-modal ${clicked ? 'visible' : 'hidden'}`}>
        <p>Are you sure you want to delete this pet?</p>
        <button onClick={handleDelete}>Confirm</button>
        <button onClick={showModal}>Cancel</button>
      </div>
    </div>
  );
}
