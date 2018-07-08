import React, { Component } from 'react'

class Done extends Component {
  constructor() {
    super()
    this.state = [
      {
        id: this.getId(),
        details: {
          title: 'First Todo',
          description: 'this is the descriptiotn',
        },
      },
      {
        id: this.getId(),
        details: {
          title: 'Second Todo',
          description: 'this is the descriptiotn to know more',
        },
      },
    ]
  }

  getId() {
    return Math.floor(Math.random() * 100000)
  }

  createElements(list) {
    return list.map(item => (
      <div id={item.id.toString()}>
        <h4>{item.details.title}</h4>
        <p>
          {item.details.description.length > 30
            ? `${item.details.description.slice(0, 28)}...`
            : item.details.description}
        </p>
      </div>
    ))
  }

  render() {
    return <div>{this.createElements(this.state)}</div>
  }
}

export default Done
