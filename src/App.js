import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'

class App extends Component {
  state = { count: 0 }
  render() {
    return (
      <div data-test="component-app">
        <div data-test="component-btn-display">count {this.state.count}</div>
        <button data-test="component-btn" onClick={() => this.setState({ count: this.state.count + 1 })}>
          increment
        </button>
      </div>
    );
  }
}

export default App;
