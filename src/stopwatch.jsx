import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  
  const [running, setRunning] = useState(false);

  const intervalRef = useRef(null);

  const handleStart = () => {
    setRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handleStop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  // Convert seconds into mm:ss format
  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <div className="time-display">
        <h2>Time: {formatTime()}</h2>
      </div>
      <div className="buttons">
        {running ? (
          <button onClick={handleStop}>Stop</button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
