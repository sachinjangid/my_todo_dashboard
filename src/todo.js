import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Todo extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
    this.addTask = this.addTask.bind(this)
  }

  listItems(items) {
    return items.map(item => {
      return (
        <div id={item.id}>
          <h4>{item.details.title}</h4>
          <p>{item.details.description}</p>
        </div>
      )
    })
  }

  addTask() {
    this.setState({
      items: this.state.items.concat([
        {
          id: Math.floor(Math.random() * 100000),
          details: { title: 'first title', description: 'first description' },
        },
      ]),
    })
  }

  render() {
    return (
      <div>
        <div className="Input-Box">
          <input name="title" />
          <textarea name="description" />
          <button onClick={this.addTask}>add</button>
        </div>
        <div>{this.listItems(this.state.items)}</div>
      </div>
    )
  }
}

export default Todo
