import React from 'react';
import page from '../../svgFiles/page-icon.svg';

const InfoBoardBlock = ({ text }) => {
  return (
    <div className="block">
      <img src={page} alt="page" />
      <h4>Lorem Ipsum</h4>
      <p>{text}</p>
    </div>
  );
}

export default InfoBoardBlock;
