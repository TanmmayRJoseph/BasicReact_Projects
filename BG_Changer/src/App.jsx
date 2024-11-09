import React, { useState } from "react";

import "./App.css";
const App = () => {
  const [color, setColor] = useState("white");

  return (
    <>
      <div className="main" style={{ backgroundColor: color }}>
        <h1>Backgroung Changer</h1>
        <div className="btns">
          <button onClick={() => setColor("red")}>Red</button>
          <button onClick={() => setColor("blue")}>Blue</button>
          <button onClick={() => setColor("green")}>Green</button>
          <button onClick={() => setColor("yellow")}>Yellow</button>
          <button onClick={() => setColor("purple")}>Purple</button>
          <button onClick={() => setColor("white")}>White</button>
        </div>
      </div>
    </>
  );
};

export default App;
