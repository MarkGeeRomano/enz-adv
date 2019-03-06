import React from 'react'

export default class extends React.Component {
  state = { count: 0 }
  render() {
    return (
      <div>
        <div>count {this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1})}>
          increment
        </button>
      </div>
    )
  }
}