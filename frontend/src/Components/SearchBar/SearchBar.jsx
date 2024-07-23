import React from 'react';
import './SearchBar.scss';

const SearchBar = () => {
  return (
    <div className="searchbar">
      <input type="text" placeholder="Search for pets..." />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
