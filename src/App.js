import React from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends React.Component {
  constructor(props) {
    super(props)
    let state = {
      color: rgba(0, 0, 0, 1)
    }
  }

  colorHandler(evt) {
    evt.preventDefault()
    let redVal = Math.floor(Math.random() * 256)
    let blueVal = Math.floor(Math.random() * 256)
    let greenVal = Math.floor(Math.random() * 256)

    this.setState({ color: rgb(redVal, greenVal, blueVal, 1) })
  }

  render() {
    return (
      <div id='wrapper'>
        <ColorChanger />
        <DisplayBox />
      </div>
    );
  }
}

export default App;
