import { Link } from 'react-router-dom';

export default function PetProfile({ currentPet }) {
  return (
    <div className="PetProfile">
      <div>
        <h1>{currentPet.name}</h1>
        <p>{currentPet.gender}</p>
        <p>{currentPet.age}</p>
        <p>{currentPet.weight} lbs</p>
        <p>{currentPet.isvaccinated ? 'Vaccinated' : 'Not vaccinated'}</p>
        <p>Existing Conditions: {currentPet.existingconditions}</p>
      </div>
      <Link to={`/edit-pet/${currentPet.id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
}
