import { useState } from "react";
import React from "react";
import "./App.css";
function App() {
  const [count, setcount] = useState(0);
  function handleincrement() {
    setcount(count + 1);
  }
  function handledecrement() {
    setcount(count - 1);
  }
  function handlereset() {
    setcount(0);
  }
  return (
    <>
      <div className="parent">
        <div className="main">
          <h1>React counter App</h1>
          <h1> Count {count}</h1>
         <div className="btn">
         <button onClick={handledecrement}>Decrement -</button>
          <button onClick={handlereset}>Reset</button>
          <button onClick={handleincrement}>Increment +</button>
         </div>
        </div>
      </div>
    </>
  );
}

export default App;
