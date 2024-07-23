import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Index from './Pages/Index';
import AboutUs from './Pages/AboutUs';
import Splash from './Pages/Splash';

const API = import.meta.env.VITE_API_URL;

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`${API}/pets`)
      .then((res) => {
        return res.json();
      })
      .then((resJSON) => {
        console.log(resJSON);
        setPets(resJSON);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/pets" element={<Index pets={pets} setPets={setPets} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
