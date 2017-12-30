import React from 'react';

const SectionHeader = ({ description }) => {
  return (
    <div className='section-header'>
      <h3><span>Lorem </span>Ipsum</h3>
      <p>{description}</p>
      <hr/>
    </div>
  );
}

export default SectionHeader;
