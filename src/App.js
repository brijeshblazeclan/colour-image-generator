import { useRef, useState } from 'react';
import './App.css';

function App() {
  const canvasRef = useRef();
  const [colorCount, setColorCount] = useState(0);

  const getColors = () => {
    let colorList = [],
      value = 8;
    for (let red = 0; red < 1 << 5; red++) {
      // Loop iterate for 32 times
      for (let green = 0; green < 1 << 5; green++) {
        for (let blue = 0; blue < 1 << 5; blue++) {
          colorList.push(
            `rgb(${red * value},${green * value},${blue * value})`
          );
        }
      }
    }
    return colorList;
  };

  const handleColourGenerate = async () => {
    const colorList = getColors();
    setColorCount(colorList.length);
    let canvas = canvasRef.current, // getting canvas element
      canvasContext = canvas ? canvas.getContext('2d') : null, // getting context
      index = 0;
    if (canvasContext) {
      for (let y = 0; y < 256; y++) {
        for (let x = 0; x < 128; x++) {
          canvasContext.fillStyle = colorList[index++]; // Random color setting
          canvasContext.fillRect(x * 6, y * 6, 8, 8); // Drawing a pixel
        }
      }
    }
  };

  return (
    <div className='App'>
      <h1>Color Image Generator</h1>
      <button onClick={handleColourGenerate} className='button'>
        Generate Image
      </button>
      <div id='color-counter' className='color-container'>
        {colorCount} colors
      </div>
      <div className='color-container'>
        <canvas ref={canvasRef} width='500' height='500'></canvas>
      </div>
    </div>
  );
}

export default App;
