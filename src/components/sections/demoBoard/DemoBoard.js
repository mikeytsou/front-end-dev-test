import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import Button from '../../Button';

class DemoBoard extends Component {
  render() {
    return (
      <div className="section">
        <SectionHeader description={this.props.description} />

        <div>
          <p>HELLO</p>
          <Button />
        </div>
      </div>
    );
  }
}

DemoBoard.defaultProps = {
  description: "Sausage reprehenderit frankfurter chicken duis. Meatball adipisicing ad sirloin pastrami turducken. Buffalo ad leberkas qui pancetta sirloin in kielbasa ut capicola doner tempor. Chuck sed nulla fugiat. Anim kevin pig aliquip doner."
}

export default DemoBoard;
