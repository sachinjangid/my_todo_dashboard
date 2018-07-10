import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Todo extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      items: [],
    }
    this.addTask = this.addTask.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
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
      title: this.state.title,
      description: this.state.description,
      items: this.state.items.concat([
        {
          id: Math.floor(Math.random() * 100000),
          details: { title: this.state.title, description: this.state.description },
        },
      ]),
    })

  }

  handleTitleChange(event) {
    this.setState({title: event.target.value})
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value})
  }


  render() {
    return (
      <div>
        <form>
          <input name="title" onChange={this.handleTitleChange} />
          <textarea name="description" onChange={this.handleDescriptionChange} />
          <button onClick={this.addTask}>add</button>
        </form>
        <div>{this.listItems(this.state.items)}</div>
      </div>
    )
  }
}

export default Todo
