import React from 'react';

const Slide = ({ images }) => {
  let styles = {
    backgroundImage: `url(images/${images})`
  }

  return (
    <div
      className="slide"
      style={styles}>
    </div>
  );
}

export default Slide;
