import { useState, useEffect } from 'react';
import PetCard from '../../Components/PetCard/PetCard';
import './Index.scss';

export default function Index() {
  const [pets, setPets] = useState([]);

  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}/pets`)
      .then((res) => res.json())
      .then((resJSON) => {
        // console.log(resJSON);
        setPets(resJSON);
      });
  }, []);
  return (
    <div className="Index">
      {pets.map((pet) => {
        return <PetCard key={pet.id} pet={pet} />;
      })}
    </div>
  );
}
