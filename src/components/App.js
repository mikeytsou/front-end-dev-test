import React, { Component } from 'react';
import Header from './Header';
import Slider from './slider/Slider';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
      </div>
    );
  }
}

export default App;
