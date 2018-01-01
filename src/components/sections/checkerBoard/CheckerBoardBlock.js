import React from 'react';

const CheckerBoardBlock = ({ title, text, images }) => {
  let styles = {
    backgroundImage: `url(images/${images})`
  }

  const renderBlock = () => {
    if(images === undefined) {
      return (
        <div className="small">
          <div>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="large" style={styles}></div>
      );
    }
  }

  return (
    <div className="block">
      {renderBlock()}
    </div>
  );
}

export default CheckerBoardBlock;
