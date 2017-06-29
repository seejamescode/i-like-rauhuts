import React, { Component } from 'react';
import './star.css';

class Star extends Component {

  state = {
    delay: Math.random(),
    left: Math.random() * 100,
    scroll: Math.random(),
    transform: Math.random() * .02,
    top: Math.random() * 100,
    twinkle: Math.random() * 10 + 1,
  }

  render() {
    return (
      <div
        style={{
          left: `calc(${this.state.left}% - 120px)`,
          opacity: this.state.scroll * (this.props.scroll - 4) * .02,
          position: 'absolute',
          top: `calc(${this.state.top}% - 120px)`,
          transform: `scale(${this.state.transform})`,
        }}
      >
        <svg
            height="240"
            style={{
              animation: `opacity ${this.state.twinkle}s ease-in-out ${this.state.delay}s infinite`,
            }}
            width="240"
          >
          <path fill="#fff" d="m48,234 73-226 73,226-192-140h238z"/>
        </svg>
      </div>
    );
  }
}

export default Star;
