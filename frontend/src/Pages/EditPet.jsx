import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditPet.scss';

const EditPet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState({
    name: '',
    species: '',
    gender: '',
    age: '',
    weight: '',
    isVaccinated: false,
    existingConditions: '',
  });

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/pets/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPet(data);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPet((prevPet) => ({
      ...prevPet,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/pets/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pet),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Pet updated:', data);
        navigate(`/pets/${id}`);
      });
  };

  return (
    <div className="edit-pet">
      <h2>Edit Pet Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={pet.name} onChange={handleChange} required />
        </label>
        <label>
          Species:
          <input type="text" name="species" value={pet.species} onChange={handleChange} required />
        </label>
        <label>
          Gender:
          <input type="text" name="gender" value={pet.gender} onChange={handleChange} required />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={pet.age} onChange={handleChange} required />
        </label>
        <label>
          Weight:
          <input type="number" name="weight" value={pet.weight} onChange={handleChange} required />
        </label>
        <label>
          Vaccinated:
          <input
            type="checkbox"
            name="isVaccinated"
            checked={pet.isVaccinated}
            onChange={handleChange}
          />
        </label>
        <label>
          Existing Conditions:
          <textarea
            name="existingConditions"
            value={pet.existingConditions}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Update Pet</button>
      </form>
    </div>
  );
};

export default EditPet;
