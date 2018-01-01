import React from 'react';

const SectionHeader = ({ description }) => {
  return (
    <div className='section-header'>
      <h1><span>Lorem </span>Ipsum</h1>
      <p>{description}</p>
      <hr/>
    </div>
  );
}

export default SectionHeader;
