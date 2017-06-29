import React, { Component } from 'react';
import './scene2.css';
import bell from '../../img/bell.svg';
import church from '../../img/church.svg';
import {tween} from 'react-imation';
import {rotateX} from 'react-imation/tween-value-factories';

class Scene2 extends Component {

  render() {

    return (
      <div
        style={{
          height: '100%',
        }}
      >
        <div
          style={{
            bottom: '84%',
            left: '42%',
            position: 'absolute',
            height: '25%',
            transformOrigin: 'bottom',
            width: '15%',
            ...tween(this.props.scroll, [
              [ 16, { transform: rotateX(85) } ],
              [ 21, { transform: rotateX(0) } ],
              [ 28, { transform: rotateX(0) } ],
              [ 35, { transform: rotateX(85) } ]
            ]),
          }}
        >
          <img
            alt="church"
            src={church}
            style={{
              height: '100%',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
            }}
          />
          <img
            alt="bell"
            src={bell}
            style={{
              animation: `bell 3s ease-in-out infinite`,
              height: '9%',
              left: '47%',
              position: 'absolute',
              top: '11%',
              width: '6%',
            }}
          />
        </div>
      </div>
    );
  }
}

export default Scene2;
