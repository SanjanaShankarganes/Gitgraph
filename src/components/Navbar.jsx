import React from 'react';

const Navbar = ({ query, setQuery, handleSearch }) => {
  return (
    <nav>
      <div className="container">
        <a href="/" className="brand">GitHub</a>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search GitHub User" 
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          <li><a href="/">Pull Requests</a></li>
          <li><a href="/">Issues</a></li>
          <li><a href="/">Marketplace</a></li>
          <li><a href="/">Explore</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
