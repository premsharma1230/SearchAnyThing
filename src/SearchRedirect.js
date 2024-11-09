import React, { useState } from 'react';

function SearchRedirect() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    // Format the search query with Google search syntax
    const formattedQuery = `intext:"${searchQuery}" filetype:pdf OR filetype:epub OR filetype:mobi`;

    // Redirect to Google search results for the formatted query
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(formattedQuery)}`;
    window.open(googleSearchURL, '_blank');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter search term"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '1rem', width: '250px', marginRight: '10px' ,
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline:'none'
          }}
        />
        <button type="submit" style={{ padding: '16px 2rem',border: '1px solid #ccc',  borderRadius: '5px',
        backgroundColor: '#4158D0',
        color:"#f2f2f2",
        fontWeight:'bold',
        backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'
        }} disabled={searchQuery.trim() === ''}>Search</button>
      </form>
    </div>
  );
}

export default SearchRedirect;

