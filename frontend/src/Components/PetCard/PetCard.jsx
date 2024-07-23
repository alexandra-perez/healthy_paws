import './PetCard.scss';

export default function Index({ pet }) {
  return (
    <div className="PetCard">
      <h1>{pet.name}</h1>
      <p>{pet.gender}</p>
      <p>{pet.age}</p>
      <p>Weight: {pet.weight}</p>
      <p>{pet.isvaccinated ? 'Vaccinated' : 'Not vaccinated'}</p>
      <p>Existing Conditions: {pet.existingconditions}</p>
    </div>
  );
}
