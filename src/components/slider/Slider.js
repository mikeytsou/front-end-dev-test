import React, { Component } from 'react';
import axios from 'axios';
import Slide from './Slide';
import Dots from './Dots';


class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      index: 0,
      sliderWidth: 0
    }
  }

  componentDidMount() {
    axios.get('images.json')
    .then(res => {
      this.setState({ images: res.data })
    });
  }

  renderSlides() {
    const { images } = this.state;
    let slides = [];

    images.forEach((img, idx) => {
      slides.push(
        <Slide key={idx} images={images[idx].image} />
      );
    });

    return slides;
  }



  render() {
    const { images, index } = this.state;

    return (
      <div className="slider">
        <div className="slider-wrapper">
          {this.renderSlides()}
        </div>

        <Dots
          index={index}
          quantity={images.length}
          dotClick={this.handleDotClick}
        />
      </div>
    );
  }
}

export default Slider;
