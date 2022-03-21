import React from 'react';

const Square= ({value, onClick})=> {
  const className= value ? `squares ${value}` : `squares`;
  return (
    <button onClick={onClick} className={className} >
      {value}
    </button>
  );
}
export default Square;