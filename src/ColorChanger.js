import React from 'react'

class ColorChanger extends React.Component {

  render() {
    return <button onClick='props.colorHandler()'>Click for a Random Color</button>
  }
}