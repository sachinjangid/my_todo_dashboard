import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const List = props => (
  <div>
    {props.map((item) => (
      <div key={item.id}>
        <h4>{item.details.title}</h4>
        <p>{item.details.description}</p>
      </div>
    ))}
  </div>
)

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      items: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  handleSubmit() {
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
          <input name="title" onChange={this.handleTitleChange} />
          <textarea
            name="description"
            onChange={this.handleDescriptionChange}
          />
          <button>add</button>
        </form>
        <div>{List(this.state.items)}</div>
      </div>
    )
  }
}

export default Todo
