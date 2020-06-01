import React, { Component } from 'react'

export class Bomb extends Component {
  constructor(props){
    super()
    
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
  const message = this.state.secondsLeft === 0? 'go boom!':`${this.state.secondsLeft} seconds left before I go boom!`
    return (
      <div>
        <p>{message}</p>
      </div> 
    )
  }
}

export default Bomb

