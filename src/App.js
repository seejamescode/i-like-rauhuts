import React, { Component } from 'react';
import './App.css';

import Background from './Background';
import Land from './background/Land';

class App extends Component {

  state = {
    docHeight: 0,
    scroll: 0,
    quadOne: 0,
  }

  getDocHeight() {
    const D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
  }

  handleResize() {
    this.setState({docHeight: this.getDocHeight()});
  };

  handleScroll() {
    let scroll = window.pageYOffset / (this.state.docHeight - window.innerHeight) * 100;
    this.setState({scroll: scroll});
  }

  componentDidMount() {
    this.setState({docHeight: this.getDocHeight()});
    window.addEventListener('resize', this.handleResize.bind(this));
    document.addEventListener('scroll', this.handleScroll.bind(this));
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
    document.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  render() {
    return (
      <div className="App">
        <Background
          scroll={this.state.scroll}
        />
        <div
          style={{
            left: '50vw',
            marginLeft: '-50%',
            minWidth: '100%',
            position: 'fixed',
            top: '50vh',
            zIndex: -1,
          }}
        >
        </div>
        <Land
          scroll={this.state.scroll}
        />
        <div
          className="scrollDown"
          style={{
            display: this.state.scroll > 3 ? 'none' : 'initial',
          }}
        >
          ▼ Scroll down ▼
        </div>
      </div>
    );
  }
}

export default App;
