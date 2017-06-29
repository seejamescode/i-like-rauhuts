import React, { Component } from 'react';
import './scene1.css';
import blimp from '../../img/blimp.svg';
import bridge from '../../img/bridge.svg';
import capital from '../../img/capital.svg';
import frost from '../../img/frost.svg';
import proposal from '../../img/proposal.png';
import star from '../../img/star.svg';
import tower from '../../img/tower.svg';
import {tween} from 'react-imation';
import {rotateX} from 'react-imation/tween-value-factories';

class Scene1 extends Component {

  render() {

    return (
      <div
        style={{
          height: '100%',
        }}
      >
        <img
          alt="bridge"
          src={bridge}
          style={{
            bottom: '91%',
            left: '36%',
            position: 'absolute',
            height: '12%',
            transformOrigin: 'bottom',
            ...tween(this.props.scroll, [
              [ 13, { transform: rotateX(0) } ],
              [ 20, { transform: rotateX(85) } ],
            ]),
          }}
        />
          <img
            alt="star"
            src={star}
            style={{
              bottom: '93%',
              left: '53%',
              position: 'absolute',
              height: '10%',
              transformOrigin: 'bottom',
              ...tween(this.props.scroll, [
                [ 11, { transform: rotateX(0) } ],
                [ 18, { transform: rotateX(85) } ],
              ]),
            }}
          />
        <img
          alt="frost"
          src={frost}
          style={{
            bottom: '86%',
            left: '32%',
            position: 'absolute',
            height: '30%',
            transformOrigin: 'bottom',
            ...tween(this.props.scroll, [
              [ 10, { transform: rotateX(0) } ],
              [ 17, { transform: rotateX(85) } ],
            ]),
          }}
        />
        <img
          alt="tower"
          src={tower}
          style={{
            bottom: '88%',
            left: '60%',
            position: 'absolute',
            height: '22%',
            transformOrigin: 'bottom',
            ...tween(this.props.scroll, [
              [ 8, { transform: rotateX(0) } ],
              [ 15, { transform: rotateX(85) } ],
            ]),
          }}
        />
        <div
          style={{
            animation: `zIndex 30s ease-in-out infinite`,
            bottom: '105%',
            left: '25%',
            position: 'absolute',
            width: '5%',
          }}
        >
          <div
            style={{
              animation: `blimp 30s ease-in-out infinite`,
              width: '100%',
            }}
          >
            <div
              style={{
                animation: `flip 30s ease-in-out infinite`,
                width: '100%',
              }}
            >
              <img
                alt="blimp"
                src={blimp}
                style={{
                  animation: `wobble 10s ease-in-out infinite`,
                  width: '100%'
                }}
              />
            </div>
          </div>
        </div>
        <img
          alt="capital"
          src={capital}
          style={{
            bottom: '83%',
            left: '40%',
            position: 'absolute',
            height: '20%',
            transformOrigin: 'bottom',
            ...tween(this.props.scroll, [
              [ 4, { transform: rotateX(0) } ],
              [ 11, { transform: rotateX(85) } ],
            ]),
          }}
        />
        <img
          alt="proposal"
          src={proposal}
          style={{
            bottom: '77%',
            left: '47%',
            position: 'absolute',
            height: '10%',
            transformOrigin: 'bottom',
            ...tween(this.props.scroll, [
              [ 0, { transform: rotateX(0) } ],
              [ 7, { transform: rotateX(85) } ],
            ]),
          }}
        />
      </div>
    );
  }
}

export default Scene1;
