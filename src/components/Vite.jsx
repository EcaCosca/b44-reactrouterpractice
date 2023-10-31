import React from 'react';
import viteLogo from '/vite.svg'; // Use a relative path here

const Vite = () => {
  return (
    <div>
        <h1>Vite</h1>
        {/* Displaying the Vite logo using an <img> tag */}
        <img className='logo' src={viteLogo} alt="Vite Logo" />
    </div>
  );
}

export default Vite;
