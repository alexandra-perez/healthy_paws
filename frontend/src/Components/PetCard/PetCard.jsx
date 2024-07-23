import './PetCard.scss';

export default function Index({ pet }) {
  return (
    <div className="PetCard">
      <h1>{pet.name}</h1>
      <img
        src="https://i.pinimg.com/564x/e3/10/cc/e310cc826dfe88605812acd16b36b162.jpg"
        alt=""
      />
      <p>{pet.gender}</p>
      <p>{pet.age}</p>
      <p>Weight: {pet.weight}</p>
      <p>{pet.isvaccinated ? 'Vaccinated' : 'Not vaccinated'}</p>
      <p>Existing Conditions: {pet.existingconditions}</p>
    </div>
  );
}
