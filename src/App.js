import { useRef, useState, useEffect } from 'react';

import helpers from './utils/helpers';
import './App.css';

function App() {
  const canvasRef = useRef(); // Ref for draw image on canvas
  const [colorCount, setColorCount] = useState(0); // Set unique colours count

  const handleColourGenerate = async () => {
    const colorList = helpers.getColors(); // Get colourfs and set in array
    setColorCount(colorList.length);
    let canvas = canvasRef.current, // getting canvas element using ref
      canvasContext = canvas ? canvas.getContext('2d') : null, // getting canvas context
      index = 0;
    if (canvasContext) {
      for (let y = 0; y < canvas.height; y++) {
        // draw pixel vertically
        for (let x = 0; x < canvas.width; x++) {
          // draw pixel horizontally
          canvasContext.fillStyle = colorList[index++]; // Random color setting
          canvasContext.fillRect(x, y, 1, 1); // Drawing a pixel
        }
      }
    }
  };

  useEffect(() => {
    handleColourGenerate(); // Function call after component load
  });

  return (
    <div className='App'>
      <h1>Color Image Generator</h1>
      <div id='color-counter' className='color-container'>
        {colorCount} colors
      </div>
      <div className='color-container'>
        <canvas ref={canvasRef} width='256' height='128'></canvas>
      </div>
    </div>
  );
}

export default App;
