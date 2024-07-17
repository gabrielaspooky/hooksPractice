import React from 'react';
import DrillingThree from './DrillingThree';
import DrillingOne from './DrillingOne';

const DrillingTwo = ({ result, setResult, x }) => {
  const handleClick = () => {
    setResult(result + x);
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>ComponentB</h2>
      <p>X = {result}</p>
      <DrillingThree handleClick={handleClick} />
    </div>
  );
};

export default DrillingTwo;
