// Code ClickityClick Component Here
import React from 'react';
import ButtonCounter from './ButtonCounter.js';
import LightSwitch from './LightSwitch.js';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue'
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState({hasBeenClicked: true},() => console.log(this.state.hasBeenClicked))
    
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
        <br></br><br></br>
        <LightSwitch />
        <ButtonCounter />
      </div>
    );
  }
}

export default ClickityClick;
