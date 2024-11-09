import './App.css';
import React from 'react';
import SearchRedirect from './SearchRedirect';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#D9AFD9',
        backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)'
      }}
    >
      <div>
        <h1 style={{ textAlign: 'center' }}> Google File Search</h1>
        <p> <b>Note:</b> You will find study material or anything in PDF from google</p>
        <SearchRedirect /></div>
    </div>
  );
}

export default App; 
