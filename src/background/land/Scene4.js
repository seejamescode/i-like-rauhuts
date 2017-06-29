import React, { Component } from 'react';
import './scene4.css';
import light from '../../img/light.svg';
import speaker from '../../img/speaker.svg';
import stage from '../../img/stage.svg';
import {tween} from 'react-imation';
import {rotateX} from 'react-imation/tween-value-factories';

class Scene4 extends Component {

  render() {

    return (
      <div
        style={{
          height: '100%',
        }}
      >
        <div
          style={{
            bottom: '90%',
            left: '42.5%',
            position: 'absolute',
            height: '20%',
            transformOrigin: 'bottom',
            width: '15%',
            ...tween(this.props.scroll, [
              [ 58, { transform: rotateX(85) } ],
              [ 63, { transform: rotateX(0) } ],
              [ 80, { transform: rotateX(0) } ],
              [ 85, { transform: rotateX(85) } ]
            ]),
          }}
        >
          <img
            alt="light"
            src={light}
            style={{
              animation: `light 1s ease-in-out 1s infinite`,
              height: '100%',
              left: '-8%',
              position: 'absolute',
              top: '-7.5%',
              transform: 'rotateZ(-59deg)',
              width: '100%',
            }}
          />
          <img
            alt="light"
            src={light}
            style={{
              animation: `light 2s ease-in-out infinite`,
              height: '100%',
              left: '-36%',
              position: 'absolute',
              top: '-2.5%',
              transform: 'rotateZ(51deg)',
              width: '100%',
            }}
          />
          <img
            alt="light"
            src={light}
            style={{
              animation: `light 2.5s ease-in-out infinite`,
              height: '100%',
              left: '36%',
              position: 'absolute',
              top: '-3.25%',
              transform: 'rotateZ(-53deg)',
              width: '100%',
            }}
          />
          <img
            alt="light"
            src={light}
            style={{
              animation: `light 1.5s ease-in-out 1s infinite`,
              height: '100%',
              left: '10%',
              position: 'absolute',
              top: '-2.5%',
              transform: 'rotateZ(50deg)',
              width: '100%',
            }}
          />
          <img
            alt="stage"
            src={stage}
            style={{
              height: '100%',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
            }}
          />
        </div>
        <div
          style={{
            bottom: '85%',
            left: '37%',
            position: 'absolute',
            height: '10%',
            transformOrigin: 'bottom',
            ...tween(this.props.scroll, [
              [ 60, { transform: rotateX(85) } ],
              [ 65, { transform: rotateX(0) } ],
              [ 82, { transform: rotateX(0) } ],
              [ 87, { transform: rotateX(85) } ]
            ]),
          }}
        >
          <img
            alt="speaker"
            src={speaker}
            style={{
              animation: `speaker .75s ease-in-out infinite`,
              position: 'absolute',
              height: '100%',
              transformOrigin: 'bottom',
            }}
          />
        </div>
        <div
          style={{
            bottom: '85%',
            left: '60%',
            position: 'absolute',
            height: '10%',
            transformOrigin: 'bottom',
            ...tween(this.props.scroll, [
              [ 62, { transform: rotateX(85) } ],
              [ 67, { transform: rotateX(0) } ],
              [ 84, { transform: rotateX(0) } ],
              [ 89, { transform: rotateX(85) } ]
            ]),
          }}
        >
          <img
            alt="speaker"
            src={speaker}
            style={{
              animation: `speaker .75s ease-in-out infinite`,
              position: 'absolute',
              height: '100%',
              transformOrigin: 'bottom',
            }}
          />
        </div>
      </div>
    );
  }
}

export default Scene4;
