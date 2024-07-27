import React from 'react';
import Hero from '../../Components/Hero/Hero';
import './Splash.scss';

const Splash = () => {
  return (
    <div>
      <Hero />
      <div className="splash-content">
        {/* Add any additional splash content here */}
      </div>
    </div>
  );
};

export default Splash;
