import React, { Component } from 'react';
import Sky from './background/Sky';

class Background extends Component {

  render() {
    return (
      <div
        style={{
          height: '100vh',
          position: 'fixed',
          width: '100vw',
        }}
      >
        <Sky
          scroll={this.props.scroll}
        />
      </div>
    );
  }
}

export default Background;
