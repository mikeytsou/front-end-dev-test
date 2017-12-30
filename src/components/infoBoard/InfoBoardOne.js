import React, { Component } from 'react';
import axios from 'axios';
import InfoBoardHeader from './InfoBoardHeader';
import InfoBoardBlock from './InfoBoardBlock';

class InfoBoardOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      texts: []
    }
  }

  componentDidMount() {
    axios.get('data.json')
    .then(res => {
      this.setState({ texts: res.data.infoTextOne })
    });
  }

  renderBlock() {
    const { texts } = this.state;
    let blocks = [];

    texts.forEach((text, idx) => {
      blocks.push(
        <InfoBoardBlock key={idx} text={texts[idx].text} />
      );
    });

    return blocks;
  }

  render() {
    // const { texts } = this.state;

    return (
      <div className="info-board">
        <InfoBoardHeader />

        <div className="grid">
          {this.renderBlock()}
        </div>
      </div>
    );
  }
}

export default InfoBoardOne;
