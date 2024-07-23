import PetCard from '../Components/PetCard/PetCard';

export default function Index({pets, setPets}) {
  return (
    <div>
      {pets.map((pet) => {
        return <PetCard key={pet.id} pet={pet} />;
      })}
    </div>
  );
}
