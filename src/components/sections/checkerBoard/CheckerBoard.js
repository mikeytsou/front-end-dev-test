import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import axios from 'axios';
import CheckerBoardBlock from './CheckerBoardBlock';

class CheckerBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      information: []
    }
  }

  componentDidMount() {
    axios.get('data.json')
    .then(res => {
      this.setState({ information: res.data.checkerBoard });
    });
  }

  renderBlock() {
    const { information } = this.state;
    let blocks = [];

    information.forEach((info, idx) => {
      blocks.push(
        <CheckerBoardBlock
          key={idx}
          title={information[idx].title}
          text={information[idx].text}
          images={information[idx].image}
        />
      );
    });

    return blocks;
  }

  render() {
    console.log(this.state)
    return (
      <section className="checker-board">
        <SectionHeader description={this.props.sectionHeaderP} />

        <div className="grid">
          {this.renderBlock()}
        </div>
      </section>
    );
  }
}

CheckerBoard.defaultProps = {
  sectionHeaderP: "Spicy jalapeno bacon ipsum dolor amet meatloaf bresaola est, ut ham hock fugiat sausage shoulder labore adipisicing jowl beef. Nisi eu dolore, in velit id mollit ham hock. Qui strip steak short ribs, pork turducken ball tip ipsum."
}

export default CheckerBoard;
