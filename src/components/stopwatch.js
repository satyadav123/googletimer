import { useState,useRef,useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const stopwatchIntervalID = useRef(null);
  
  useEffect(() => {
    return () => {
      clearStopwatchInterval();
    }
  },[]);
  const start = () => {
      if(stopwatchIntervalID.current === null){
          stopwatchIntervalID.current = setInterval(() => {
            setTime(prev => prev + 1);
          }, 10); // runs every 10 millisecond

      }
  }

  const stop = () => {
      clearStopwatchInterval();
  }

  const reset = () => {
      clearStopwatchInterval();
      setTime(0);
  }
  
  const clearStopwatchInterval = () => {
      clearInterval(stopwatchIntervalID.current);
      stopwatchIntervalID.current = null;
  }
  const seconds = Math.floor(time/100)%60;
  const minutes = Math.floor((time/6000))%60;
  const hours = Math.floor(time/360000)%24;
  const milliSeconds = time%100;

  const timeString = `${hours}h : ${minutes}m : ${seconds}s : ${milliSeconds}`;
  return (
    <div>
      <h2>Stopwatch</h2>
      <h3>{timeString}</h3>
      <div className="timer-controls">
        <button className="start-btn" onClick={start}>Start</button>
        <button className="stop-btn" onClick={stop}>Stop</button>
        <button className="reset-btn" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
