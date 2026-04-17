import { useState, useEffect } from "react";
import './App.css'

 function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function startTime() {
    setIsRunning(true);
  }

  function stopTime() {
    setIsRunning(false);
  }

  function resetTime(){
    setSeconds(0);
    setIsRunning(false);
  }

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = () => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="app-container">   
      <h1>Timer</h1>
      <div className="time-display">{formatTime()}</div>  
      <div className="button-group">
            <button className="btn btn-start" onClick={startTime}>Start Time</button>
            <button className="btn btn-stop" onClick={stopTime}>Stop Time</button>
            <button className="btn btn-reset" onClick={resetTime}>Reset Time</button>
      </div> 
    </div>
  )
}

export default App;