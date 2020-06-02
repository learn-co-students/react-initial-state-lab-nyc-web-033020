import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './src/ImageSlider';
import Bomb from './src/Bomb';

ReactDOM.render(
  <div>
    <ImageSlider />
    <Bomb initialCount={120} />
  </div>,
  document.getElementById('root')
);

export default Bomb