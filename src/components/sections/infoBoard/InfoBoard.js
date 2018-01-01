import React, { Component } from 'react';
import axios from 'axios';
import envelope from '../../../svgFiles/envelope-icon.svg';
import SectionHeader from '../SectionHeader';
import InfoBoardBlock from './InfoBoardBlock';

class InfoBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      texts: []
    }
  }

  componentDidMount() {
    axios.get('data.json')
    .then(res => {
      this.setState({ texts: res.data.infoBoard });
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
    return (
      <section className="info-board">
        <div className="sticky">
        <a href="#"><img src={envelope} alt="envelope" /></a>
        </div>

        <SectionHeader description={this.props.sectionHeaderP} />

        <div className="grid">
          {this.renderBlock()}
        </div>
      </section>
    );
  }
}

InfoBoard.defaultProps = {
  sectionHeaderP: "Spicy jalapeno bacon ipsum dolor amet meatloaf bresaola est, ut ham hock fugiat sausage shoulder labore adipisicing jowl beef. Nisi eu dolore, in velit id mollit ham hock. Qui strip steak short ribs, pork turducken ball tip ipsum."
}

export default InfoBoard;
