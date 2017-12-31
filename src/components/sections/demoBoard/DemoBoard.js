import React, { Component } from 'react';
import SectionHeader from '../SectionHeader';
import Button from '../../Button';

class DemoBoard extends Component {
  render() {
    return (
      <section className="demo-board">
        <SectionHeader description={this.props.sectionHeaderP} />

        <div className="grid">
          <div className="blurb">
            {this.props.blurb}
          </div>

          <div className="button-container">
            <Button />
          </div>
        </div>
      </section>
    );
  }
}

DemoBoard.defaultProps = {
  sectionHeaderP: "Sausage reprehenderit frankfurter chicken duis. Meatball adipisicing ad sirloin pastrami turducken. Buffalo ad leberkas qui pancetta sirloin in kielbasa ut capicola doner tempor. Chuck sed nulla fugiat. Anim kevin pig aliquip doner.",
  blurb: "Occaecat esse sunt kevin, do enim cow consequat ham hock meatball officia incididunt. Ut leberkas ullamco sed doner et ribeye tempor magna voluptate aliqua pastrami. Brisket tenderloin reprehenderit, cupidatat pastrami in ea pariatur cillum minim fugiat pig laborum sirloin. Cow reprehenderit swine ground round veniam. Short ribs short loin biltong, proident nulla beef ribs adipisicing sirloin doner. Swine ullamco kielbasa, short ribs sirloin chicken ham laborum consequat shoulder nostrud."
}

export default DemoBoard;
