import { useState, useEffect } from 'react';

export default function ShowPet() {
  const [currentPet, setCurrentPet] = useState({
    name: '',
    species: '',
    gender: 'F',
    age: 0,
    weight: 0,
    isvaccinated: false,
    existingconditions: '',
  });

  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/pets/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        // console.log(resJSON);
        setCurrentPet(resJSON);
      })
      .catch(() => {
        navigate('/notfound');
      });
  }, [id]);

  return (
    <div className="ShowPet">
      <h1>Show pet</h1>
    </div>
  );
}
