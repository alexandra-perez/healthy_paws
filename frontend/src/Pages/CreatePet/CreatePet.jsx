import React, { useState } from 'react';

const API = import.meta.env.VITE_API_URL;

function CreatePet({ onPetCreated, onClose }) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [isVaccinated, setIsVaccinated] = useState(false);
  const [existingConditions, setExistingConditions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPet = {
      name,
      gender,
      age,
      weight,
      isVaccinated,
      existingConditions
    };

    try {
      const response = await fetch(`${API}/pets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPet)
      });

      if (!response.ok) {
        throw new Error(`Failed to create pet: ${response.statusText}`);
      }

      const responseData = await response.json();
      onPetCreated(responseData);
      onClose(); // Close the modal after submission
    } catch (error) {
      console.error('Error creating pet:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label>Weight:</label>
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Vaccinated:</label>
        <input
          type="checkbox"
          checked={isVaccinated}
          onChange={(e) => setIsVaccinated(e.target.checked)}
        />
      </div>
      <div>
        <label>Existing Conditions:</label>
        <input
          type="text"
          value={existingConditions}
          onChange={(e) => setExistingConditions(e.target.value)}
        />
      </div>
      <button type="submit">Create Pet</button>
    </form>
  );
}

export default CreatePet;
