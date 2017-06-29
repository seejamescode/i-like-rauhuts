import React, { Component } from 'react';
import './scene3.css';
import table from '../../img/table.svg';
import truck from '../../img/truck.svg';
import {tween} from 'react-imation';
import {rotateX} from 'react-imation/tween-value-factories';

class Scene3 extends Component {

  render() {

    return (
      <div
        style={{
          height: '100%',
        }}
      >
        <div
          style={{
            bottom: '86%',
            left: '32%',
            position: 'absolute',
            height: '20%',
            transformOrigin: 'bottom',
            width: '15%',
            ...tween(this.props.scroll, [
              [ 36, { transform: rotateX(85) } ],
              [ 41, { transform: rotateX(0) } ],
              [ 51, { transform: rotateX(0) } ],
              [ 56, { transform: rotateX(85) } ]
            ]),
          }}
        >
          <img
            alt="truck"
            src={truck}
            style={{
              height: '100%',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
            }}
          />
          <span
            style={{
              animation: `smoke 3s ease-in-out infinite`,
              background: '#efe9e9',
              borderRadius: '50%',
              height: '15%',
              left: '3%',
              opacity: 0,
              position: 'absolute',
              top: '0%',
              width: '10%',
            }}
          />
          <span
            style={{
              animation: `smoke 3s ease-in-out 1s infinite`,
              background: '#e2d5d5',
              borderRadius: '50%',
              height: '20%',
              left: '2%',
              opacity: 0,
              position: 'absolute',
              top: '-5%',
              width: '12%',
            }}
          />
          <span
            style={{
              animation: `smoke 3s ease-in-out 2s infinite`,
              background: '#ccbcbc',
              borderRadius: '50%',
              height: '23%',
              left: '0%',
              opacity: 0,
              position: 'absolute',
              top: '-8%',
              width: '15%',
            }}
          />
        </div>

        <img
          alt="table"
          src={table}
          style={{
            bottom: '93%',
            left: '53%',
            position: 'absolute',
            height: '6%',
            transformOrigin: 'bottom',
            ...tween(this.props.scroll, [
              [ 39, { transform: rotateX(85) } ],
              [ 46, { transform: rotateX(0) } ],
              [ 52, { transform: rotateX(0) } ],
              [ 57, { transform: rotateX(85) } ]
            ]),
          }}
        />
        <img
          alt="table"
          src={table}
          style={{
            bottom: '86%',
            left: '62%',
            position: 'absolute',
            height: '6.5%',
            transformOrigin: 'bottom',
            ...tween(this.props.scroll, [
              [ 35, { transform: rotateX(85) } ],
              [ 42, { transform: rotateX(0) } ],
              [ 50, { transform: rotateX(0) } ],
              [ 57, { transform: rotateX(85) } ]
            ]),
          }}
        />
        <img
          alt="table"
          src={table}
          style={{
            bottom: '81%',
            left: '49%',
            position: 'absolute',
            height: '7%',
            transformOrigin: 'bottom',
            ...tween(this.props.scroll, [
              [ 37, { transform: rotateX(85) } ],
              [ 44, { transform: rotateX(0) } ],
              [ 52, { transform: rotateX(0) } ],
              [ 59, { transform: rotateX(85) } ]
            ]),
          }}
        />
      </div>
    );
  }
}

export default Scene3;
