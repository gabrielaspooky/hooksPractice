import React from 'react';

const DrillingThree = ({ handleClick }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>ComponentC</h2>
      <button onClick={handleClick}>X++</button>
    </div>
  );
};

export default DrillingThree;
