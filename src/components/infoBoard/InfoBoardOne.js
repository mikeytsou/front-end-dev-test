import React, { Component } from 'react';
import axios from 'axios';
import InfoBoardTitle from './InfoBoardTitle';

class InfoBoardOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: []
    }
  }

  componentDidMount() {
    axios.get('data.json')
    .then(res => {
      this.setState({ text: res.data.infoTextOne })
    });
  }

  render() {
    const { text } = this.state;
    console.log(text)
    return (
      <div className="info-board">
        <InfoBoardTitle />
      </div>
    );
  }
}

export default InfoBoardOne;
