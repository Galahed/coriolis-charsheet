import React from 'react';

class Selector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, selected } = this.props;

    return <div {...this.props}>{children[selected*1]}</div>;
  }
}

export default Selector;
