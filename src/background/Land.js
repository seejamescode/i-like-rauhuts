import React, { Component } from 'react';
import {combine, tween} from 'react-imation';
import {rotate, scale, translateY} from 'react-imation/tween-value-factories';
import './land.css';
import Scene from './land/Scene';
import Scene1 from './land/Scene1';
import Scene2 from './land/Scene2';
import Scene3 from './land/Scene3';
import Scene4 from './land/Scene4';

class Land extends Component {

  render() {
    return (
      <div
        className="globe"
        style={{
          background: `radial-gradient(circle at 50% ${0 - this.props.scroll * .8}%, #34bc6e, #000)`,
          ...tween(this.props.scroll, [
            [ 85, { transform: combine(scale(1), translateY(0)) } ],
            [ 100, { transform: combine(scale(.1), translateY(10)) } ]
          ])
        }}
      >
        <div
          style={{
            height: '100%',
            width: '100%',
            ...tween(this.props.scroll, [
              [ 0, { transform: rotate(0) } ],
              [ 12, { transform: rotate(0) } ],
              [ 20, { transform: rotate(90) } ],
              [ 32, { transform: rotate(90) } ],
              [ 40, { transform: rotate(180) } ],
              [ 52, { transform: rotate(180) } ],
              [ 60, { transform: rotate(270) } ],
            ])
          }}
        >
          <Scene
            style={{
              position: 'absolute',
            }}
          >
            <Scene1
              scroll={this.props.scroll}
            />
          </Scene>
          <Scene
            style={{
              right: '25%',
              top: '25%',
              transform: 'rotateZ(270deg)',
            }}
          >
            <Scene2
              scroll={this.props.scroll}
            />
          </Scene>
          <Scene
            style={{
              top: '50%',
              transform: 'rotateZ(180deg)',
            }}
          >
            <Scene3
              scroll={this.props.scroll}
            />
          </Scene>
          <Scene
            style={{
              left: '25%',
              top: '25%',
              transform: 'rotateZ(90deg)',
            }}
          >
            <Scene4
              scroll={this.props.scroll}
            />
          </Scene>
        </div>
      </div>
    );
  }
}

export default Land;
