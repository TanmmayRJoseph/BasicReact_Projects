import React from "react";
import { useState } from "react";
import "./App.css";
const App = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const handleStart = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
      setIntervalId(id);
    }
  };
  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const handleReset = () => {
    handleStop();
    setTime(0);
  };
  return (
    <div className="main">
      <h1>Stopwatch</h1>
      <h3>{time}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
