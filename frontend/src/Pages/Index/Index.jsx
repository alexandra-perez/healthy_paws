import { useState, useEffect } from 'react';
import PetCard from '../../Components/PetCard/PetCard';
import SearchBar from '../../Components/SearchBar/SearchBar';
import './Index.scss';

export default function Index() {
  const [pets, setPets] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/pets`)
      .then((res) => res.json())
      .then((resJSON) => {
        setPets(resJSON);
      });
  }, []);

  return (
    <div className="Index">
      <SearchBar pets={pets} />
      <div className="pet-list">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

