import React, { Component } from 'react';
import Header from './Header';
import Slider from './sections/slider/Slider';
import InfoBoard from './sections/infoBoard/InfoBoard';
import DemoBoard from './sections/demoBoard/DemoBoard';
import CheckerBoard from './sections/checkerBoard/CheckerBoard';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Slider />
        <InfoBoard />
        <DemoBoard />
        <CheckerBoard />
        <Footer />
      </div>
    );
  }
}

export default App;
