import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class InProgress extends Component {
  constructor() {
    super()
    this.state = [
      {
        description: 'first description',
        title: 'first title',
      },
      {
        description: 'second description',
        title: 'second title',
      },
    ]
  }

  render() {
    return (
      <div>
        {this.state.map(item => (
          <div>
            <b>{item.title}</b>
            <div>{item.description}</div>
            <button>click</button>
          </div>
        ))}
      </div>
    )
  }
}

export default InProgress
