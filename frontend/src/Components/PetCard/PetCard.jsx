import { Link } from 'react-router-dom';
import './PetCard.scss';

export default function Index({ pet }) {
  return (
    <div className="PetCard">
      <div>
        <h1>{pet.name}</h1>
        <p>{pet.gender}</p>
        <p>Age {pet.age}</p>
        <p>{pet.weight} lbs</p>
        <p>{pet.isvaccinated ? 'Vaccinated' : 'Not vaccinated'}</p>
        <p>
          {pet.existingconditions
            ? `Existing conditions: ${pet.existingconditions}`
            : 'No existing conditions'}
        </p>
      </div>
      <div>
        <Link to={`/pets/${pet.id}`}>
          <button>View {pet.name}'s details</button>
        </Link>
      </div>
    </div>
  );
}
