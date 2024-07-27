import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PetProfile from '../../Components/PetProfile/PetProfile';
import './ShowPet.scss';

export default function ShowPet() {
  const [currentPet, setCurrentPet] = useState({
    name: '',
    species: '',
    gender: 'F',
    age: 0,
    weight: 0,
    isvaccinated: false,
    existingconditions: '',
  });
  const [clicked, setClicked] = useState(false);

  function showModal() {
    setClicked((prevClick) => !prevClick);
    console.log(setClicked);
  }

  let { id } = useParams();
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/pets/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        // console.log(resJSON);
        setCurrentPet(resJSON);
      })
      .catch(() => {
        navigate('/notfound');
      });
  }, [id]);

  function handleDelete() {
    fetch(`${API}/pets/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(currentPet),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        navigate('/index');
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="ShowPet">
      <PetProfile currentPet={currentPet} setCurrentPet={setCurrentPet} />
      <div className={`delete-modal ${clicked ? 'visible' : 'hidden'}`}>
        <p>Are you sure you want to delete this pet?</p>
        <button onClick={handleDelete}>Confirm</button>
        <button onClick={showModal}>Cancel</button>
      </div>
      <button onClick={showModal}>Delete Pet</button>
    </div>
  );
}
