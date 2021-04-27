import { useRef, useState, useEffect } from 'react';

import helpers from './utils/helpers';
import './App.css';

function App() {
  const canvasRef = useRef();
  const [colorCount, setColorCount] = useState(0);

  const handleColourGenerate = async () => {
    const colorList = helpers.getColors();
    setColorCount(colorList.length);
    let canvas = canvasRef.current, // getting canvas element
      canvasContext = canvas ? canvas.getContext('2d') : null, // getting context
      index = 0;
    if (canvasContext) {
      for (let y = 0; y < 128; y++) {
        for (let x = 0; x < 256; x++) {
          canvasContext.fillStyle = colorList[index++]; // Random color setting
          canvasContext.fillRect(x * 1, y * 1, 1, 1); // Drawing a pixel
        }
      }
    }
  };

  useEffect(() => {
    handleColourGenerate();
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
