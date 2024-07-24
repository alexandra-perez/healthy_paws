import PetCard from '../../Components/PetCard/PetCard';
import './Index.scss';

export default function Index({ pets, setPets }) {
  return (
    <div className='Index'>
      {pets.map((pet) => {
        return <PetCard key={pet.id} pet={pet} />;
      })}
    </div>
  );
}
