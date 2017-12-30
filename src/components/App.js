import React, { Component } from 'react';
import Header from './Header';
import Slider from './slider/Slider';
import InfoBoardOne from './infoBoard/InfoBoardOne';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Slider />
        <InfoBoardOne />
      </div>
    );
  }
}

export default App;
