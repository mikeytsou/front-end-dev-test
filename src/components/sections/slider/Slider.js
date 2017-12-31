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
      slideWidthValue: 0
    }
  }

  componentDidMount() {
    axios.get('data.json')
    .then(res => {
      this.setState({ images: res.data.slider });
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

  handleDotClick = i => {
    const { index } = this.state;

    if(i === index) return;

    if(i > index) {
      return this.setState({
        index: i,
        slideWidthValue: -(i * this.slideWidth())
      });
    }
    else {
      return this.setState({
        index: i,
        slideWidthValue: this.state.slideWidthValue += ((this.state.index - i) * (this.slideWidth()))
      });
    }
  }

  slideWidth() {
    const slide = document.querySelector('.slide');
    return slide.clientWidth;
  }

  render() {
    const { images, index, slideWidthValue } = this.state;
    let styles = {
      transform: `translateX(${slideWidthValue}px)`
    }

    return (
      <section className="slider">
        <div className="slider-wrapper" style={styles}>
          {this.renderSlides()}
        </div>

        <Dots
          index={index}
          quantity={images.length}
          dotClick={this.handleDotClick}
        />
      </section>
    );
  }
}

export default Slider;
