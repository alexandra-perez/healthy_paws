import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import splashImg from '../../assets/splash-pg-image.jpg';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="image-container">
        <h1>Welcome to HealthyPaws</h1>
        <p>Your one-stop solution for all pet care needs.</p>
        <SearchBar />
      </div>
      <div className="top-info-container">
        <h2>Comprehensive Health Tracking for Your Pet</h2>
        <p>
          HealthyPaws is your ultimate companion for managing your pet's health.
          From age and weight to vaccination records, monitor all vital
          information with ease, just like you would track your own health.
          Ensure your furry friend stays healthy and happy!
        </p>
      </div>
      <div className="bottom-info-container">
        <i class="fa-solid fa-heart"></i>
        <h2>
          Join our community of pet lovers and give your pet the care they
          deserve.
          <button>Add a Pet</button>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
