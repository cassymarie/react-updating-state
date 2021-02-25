import React, {Component} from 'react';

//handle the logic that involves this.state outside of setState. Below is an example of a component that uses this approach to keep track of button presses

class ButtonCounter extends Component {
  constructor() {
    super()
    // initial state has count set at 0
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState

    // let newCount = this.state.count + 1
    // this.setState({
    //   count: newCount
    // })

    //React actually provides a built in solution. Instead of passing an object into setState, we can also pass a function
    this.setState(previousState => {
        return {
          count: previousState.count + 1
        }
      })

    
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default ButtonCounter 