import React from 'react';
import './Table.css';

function Table(props) {
  
  return (
    <div className='tableShell'>
      <p>{props.number}</p>
    </div>
  );
}

export default Table;
