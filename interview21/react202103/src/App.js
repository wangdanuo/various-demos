import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  state = {
    a: 1
  }
  set = () => {
    this.setState({a: 1})
  }
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.set}>set</button>
      </div>
    )
  }
}
