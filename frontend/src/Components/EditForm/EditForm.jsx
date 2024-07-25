import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditForm.scss';

export default function EditForm() {
  const [currentPet, setCurrentPet] = useState({
    name: '',
    species: '',
    gender: '',
    age: 0,
    weight: 0,
    isVaccinated: false,
    existingConditions: '',
  });

  const API = import.meta.env.VITE_API_URL;

  let { id } = useParams();
  const navigate = useNavigate();

  function handleTextChange(e) {
    setCurrentPet({
      ...currentPet,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updatePet();
    setCurrentPet({
      name: '',
      species: '',
      gender: '',
      age: 0,
      weight: 0,
      isVaccinated: false,
      existingConditions: '',
    });
  }

  function updatePet() {
    fetch(`${API}/pets/${id}`, {
      method: 'PUT',
      body: JSON.stringify(currentPet),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        navigate(`/pets/${id}`);
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetch(`${API}/pets/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        setCurrentPet(resJSON);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="EditForm">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            id="name"
            value={currentPet.name}
            onChange={handleTextChange}
          />
        </label>
        <label>
          Species:
          <input
            type="text"
            id="species"
            value={currentPet.species}
            onChange={handleTextChange}
          />
        </label>
        <label>
          Gender:
          <input
            type="text"
            id="gender"
            value={currentPet.gender}
            onChange={handleTextChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            id="age"
            value={currentPet.age}
            onChange={handleTextChange}
          />
        </label>
        <label>
          Weight:
          <input
            type="number"
            id="weight"
            value={currentPet.weight}
            onChange={handleTextChange}
          />
        </label>
        <label>
          Vaccinated:
          <input
            type="checkbox"
            id="isVaccinated"
            checked={currentPet.isVaccinated}
            onChange={handleTextChange}
          />
        </label>
        <label>
          Existing Conditions:
          <textarea
            id="existingConditions"
            value={currentPet.existingConditions}
            onChange={handleTextChange}
          ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
