import React from 'react'

const Dot = ({ id, active, dotClick }) => {
  let dotStyle = active ? 'dot active' : 'dot';

  return (
    <div
      className={dotStyle}
      onClick={() => dotClick(id)}>
    </div>
  );
}

export default Dot;
