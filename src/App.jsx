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
    <>   
    <h1>Timer</h1>
    <div className="timer">
          <button onClick={startTime}>Start Time</button>
          <button onClick={stopTime}>Stop Time</button>
          <button onClick={resetTime}>Reset Time</button>
    </div> 
    <p className="time">{formatTime()}</p>  
    </>
  )
}
export default App;