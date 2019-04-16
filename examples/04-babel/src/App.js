import React from 'react'

export class App extends React.Component {
  constructor () {
    super()
    this.state = {
      highlight: false
    }
  }

  render () {
    return (
      <div
        style={{
          color: this.state.highlight
            ? 'red'
            : null,
          cursor: 'default',
          fontSize: '5rem',
          textAlign: 'center'
        }}
        onClick={() => this.setState({
          highlight: !this.state.highlight
        })}
      >
        Well, well well
      </div>
    )
  }
}
