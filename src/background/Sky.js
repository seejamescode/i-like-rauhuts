import React, { Component } from 'react';
import './sky.css';
import Star from './sky/Star';

class Sky extends Component {

  render() {
    var stars = [];
    for (var i = 0; i < 100; i++) {
      stars.push(
        <Star
          key={i}
          scroll={this.props.scroll}
        />
      );
    }
    return (
      <div
        className="sky"
        style={{
          background: 'linear-gradient(0deg, #ffaa9d, #d1f0f7)',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(0deg, #251b2f, #2a2a2a)',
            height: '100vh',
            left: 0,
            opacity: this.props.scroll * .01,
            position: 'absolute',
            top: 0,
            width: '100vw'
          }}
        />
        {stars}
        <div
          className="sun"
          style={{
            top: `calc(${this.props.scroll}% + 100px)`,
          }}
        />
      </div>
    );
  }
}

export default Sky;
