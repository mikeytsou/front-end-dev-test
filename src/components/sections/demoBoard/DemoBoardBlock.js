import React from 'react';

const DemoBoardData = ({ text, percentage }) => {
  return (
    <div className="block">
      <h4>{percentage}</h4>
      <p>{text}</p>
    </div>
  );
}

export default DemoBoardData;
