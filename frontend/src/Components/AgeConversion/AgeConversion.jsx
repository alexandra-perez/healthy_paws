import React from 'react';

const speciesToHumanAge = (species, age) => {
  const conversionRates = {
    cat: 15, // Example conversion rate
    dog: 7,
    rabbit: 8,
    hamster: 50,
    guinea_pig: 12,
    ferret: 9,
    bird: 5,
    fish: 5,
    turtle: 1,
    snake: 2,
    lizard: 4,
    frog: 5,
    hedgehog: 5,
    horse: 3,
    goat: 5,
    sheep: 5,
    pig: 5,
    chicken: 4,
    duck: 5,
    cow: 2
  };

  const rate = conversionRates[species.toLowerCase()];
  return rate ? age * rate : age; // If no rate is found, return the age as is
};

const AgeConversion = ({ species, age }) => {
  const humanAge = speciesToHumanAge(species, age);
  return <p>Human Age Equivalent: {humanAge} years</p>;
};

export default AgeConversion;
