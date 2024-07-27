import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import splashImg from '../../assets/splash-pg-image.jpg';
import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="image-container">
        <video autoPlay loop muted>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <h1>HealthyPaws</h1>
        <p>Your one-stop solution for all pet care needs.</p>
        {/* <SearchBar /> */}
      </div>
      <div className="top-info-container">
        <i className="fa-solid fa-heart-pulse"></i>
        <h2>Comprehensive Health Tracking for Your Pet</h2>
        <p>
          HealthyPaws is your ultimate companion for managing your pet's health.
        </p>
        <p>
          From age and weight to vaccination records, monitor all vital
          information with ease, just like you would track your own health.
        </p>
        <p>Ensure your furry friend stays healthy and happy!</p>
      </div>
      <div className="bottom-info-container">
        <i className="fa-solid fa-shield-dog"></i>{' '}
        <h2>
          Join our community of pet lovers and give your pet the care they
          deserve.
          <Link to="/create-pet">
            <button>Add a Pet</button>
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
