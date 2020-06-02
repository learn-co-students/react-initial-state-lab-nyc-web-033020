import React, { Component } from "react";

export default class ImageSlider extends Component {
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0,
    };
  }

  render() {
    const msg =
      this.state.secondsLeft === 0
        ? "Boom!"
        : `I am on slide ${this.state.currentSlideIndex}`;

    return <div>{msg}</div>;
  }
}
