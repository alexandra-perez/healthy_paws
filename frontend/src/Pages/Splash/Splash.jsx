import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Hero from '../../Components/Hero/Hero';
import Footer from '../../Components/Footer/Footer';

const Splash = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="splash-content">
        {/* Add any additional splash content here */}
      </div>
      <Footer />
    </div>
  );
};

export default Splash;
