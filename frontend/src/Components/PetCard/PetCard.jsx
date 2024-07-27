import { Link } from 'react-router-dom';
import AgeConversion from '../AgeConversion/AgeConversion';
import './PetCard.scss';

export default function Index({ pet }) {
  return (
    <div className="PetCard">
      <div>
        <h1>{pet.name}</h1>
        <p>Species: {pet.species}</p>
        <p>Gender: {pet.gender}</p>
        <p>Age: {pet.age} years</p>
        <AgeConversion species={pet.species} age={pet.age} />
        <p>Weight: {pet.weight}</p>
        <p>Vaccinated: {pet.isVaccinated ? 'Yes' : 'No'}</p>
        <p>Existing Conditions: {pet.existingconditions}</p>
      </div>
      <div>
        <Link to={`/pets/${pet.id}`}>
          <button>View {pet.name}'s details</button>
        </Link>
      </div>
    </div>
  );
}



