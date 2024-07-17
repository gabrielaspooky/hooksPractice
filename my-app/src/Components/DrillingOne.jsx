// el boton va en el tercero
// la función va en el segundo

import React from 'react';
import DrillingTwo from './DrillingTwo';


const DrillingOne = ({ x }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>ComponentA</h2>
      <p>X = {x}</p>
<DrillingTwo />
    </div>
  );
};

export default DrillingOne;
