import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.scss';

const SearchBar = ({ pets }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const pet = pets.find((pet) =>
      pet.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (pet) {
      navigate(`/pets/${pet.id}`);
    } else {
      alert('No pet found with that name');
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search for pets..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
