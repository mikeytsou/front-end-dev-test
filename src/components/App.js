import React, { Component } from 'react';
import Header from './Header';
import Slider from './slider/Slider';
import InfoBoard from './sections/infoBoard/InfoBoard';
import DemoBoard from './sections/demoBoard/DemoBoard';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Slider />
        <InfoBoard />
        <DemoBoard />
      </div>
    );
  }
}

export default App;
