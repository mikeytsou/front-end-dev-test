import React, { Component } from 'react';
import axios from 'axios';
import Slide from './Slide';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
  }

  componentDidMount() {
    axios.get('images.json')
    .then(res => {
      this.setState({ images: res.data })
    });
  }

  render() {
    const { images } = this.state;

    return (
      <div className="slider">
        <div className="slider-wrapper">

        </div>
      </div>
    );
  }
}

export default Slider;
