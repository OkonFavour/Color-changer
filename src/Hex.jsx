import React, { useState } from 'react';
import './App.css';
import './Hex'

const hex = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"
];

function App() {
    const [currentColor, setCurrentColor] = useState(hex[0]);
  
    const changeBackground = () => {
      const randomNumber = Math.floor(Math.random() * hex.length);
      setCurrentColor(hex[randomNumber]);
      document.body.style.backgroundColor = hex[randomNumber];
    };

    return (
        <div className="App">
          <nav>
            <div class="container">
              <div class="nav-holder">
                <h2>Color Flipper</h2>
                <ul class="nav-links d-flex">
                  <li>
                    <a href="./App">Simple</a>
                  </li>
                  <li>
                    <a href="./Hex">Hex</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <main>
            <div class="container">
              <div class="holder-color">
                <div class="content-color">
                  <h2 class="color-text">Background Color: <span class="color">{currentColor}</span></h2>
                  <button className="change-button" onClick={changeBackground}>Change Color</button>
                </div>
              </div>
            </div>
          </main>
    
        </div>
      );
    }
    
    export default App;
    