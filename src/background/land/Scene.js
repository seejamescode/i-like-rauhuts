import React, { Component } from 'react';

class Scene extends Component {

  render() {

    return (
      <div
        style={{
          height: '50%',
          position: 'absolute',
          width: '100%',
          ...this.props.style
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Scene;
