import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const List = props => (
  <div>
    {props.items.map(item => (
      <div key={item.id}>
        <h4>{item.details.title}</h4>
        <p>{item.details.description}</p>
      </div>
    ))}
  </div>
)

class Todo extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      items: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      items: [
        ...this.state.items,
        {
          id: Math.floor(Math.random() * 100000),
          details: {
            title: this.state.title,
            description: this.state.description,
          },
        },
      ],
    })
    this.setState({title: '', description: ''})
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} name="title" onChange={this.handleTitleChange} />
          <textarea value={this.state.description}
            name="description"
            onChange={this.handleDescriptionChange}
          />
          <button>add</button>
        </form>
        <List items={this.state.items} />
      </div>
    )
  }
}

export default Todo
