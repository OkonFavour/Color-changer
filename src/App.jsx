import React, { useState } from 'react';
import './App.css';
import './Hex'

const colors = [
  "white",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "brown",
  "pink",
  "chocolate"
];

function App() {
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const changeBackground = () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    setCurrentColor(colors[randomNumber]);
    document.body.style.backgroundColor = colors[randomNumber];
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
