import React, { useState } from 'react';
import './CreatePet.scss';

const CreatePet = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [isVaccinated, setIsVaccinated] = useState(false);
  const [existingConditions, setExistingConditions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPet = {
      name,
      species,
      gender,
      age,
      weight,
      isVaccinated,
      existingConditions,
    };
    // Replace with your API URL
    const API = import.meta.env.VITE_API_URL;
    fetch(`${API}/pets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPet),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Pet created:', data);
        // Redirect or update state to show the new pet
      });
  };

  return (
    <div className="create-pet">
      <h2>Create New Pet Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Species:
          <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} required />
        </label>
        <label>
          Gender:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </label>
        <label>
          Weight:
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        </label>
        <label>
          Vaccinated:
          <input
            type="checkbox"
            checked={isVaccinated}
            onChange={(e) => setIsVaccinated(e.target.checked)}
          />
        </label>
        <label>
          Existing Conditions:
          <textarea
            value={existingConditions}
            onChange={(e) => setExistingConditions(e.target.value)}
          ></textarea>
        </label>
        <button type="submit">Create Pet</button>
      </form>
    </div>
  );
};

export default CreatePet;
