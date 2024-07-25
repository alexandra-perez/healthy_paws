import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PetProfile from '../../Components/PetProfile/PetProfile';

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
      <button onClick={handleDelete}>Delete Pet</button>
    </div>
  );
}
