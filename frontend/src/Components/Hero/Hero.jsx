import React from 'react';
import './Hero.scss';
import SearchBar from '../SearchBar/SearchBar';

const Hero = () => {
  return (
    <div className="hero">
      <h1>Welcome to Petcare</h1>
      <p>Your one-stop solution for all pet care needs.</p>
      <SearchBar />
    </div>
  );
};

export default Hero;
