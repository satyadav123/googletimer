import TimerInput from "./timerInput";
import { useState,useEffect, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const handleSetTime = (time_in_seconds) => {
    setTime(time_in_seconds);
  };

  const timerIntervalID = useRef(null);
  const start = () => {
      // if there is no timer running start a new timer
    if (timerIntervalID.current === null && time !== 0) {
      timerIntervalID.current = setInterval(() => {
        setTime((prev) => {
         // when the time reaches 0 clear interval
          if (prev - 1 === 0) {
            clearTimeInterval();
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stop = () => {
    clearTimeInterval();
  };

  const reset = () => {
    clearTimeInterval();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      clearTimeInterval();
    };
  }, []);
  const clearTimeInterval = () => {
    clearInterval(timerIntervalID.current);
    timerIntervalID.current = null;
  };
  
  const hours = Math.floor(time / (60 * 60)) % 24;
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time) % 60;
  const timeString = `${hours}h ${minutes}m ${seconds}s`;


  return (
    <div>
      <h2>Timer</h2>
      <h3>{timeString}</h3>
      <div className="timer-controls">
        <button className="start-btn" onClick={start}>
          Start
        </button>
        <button className="stop-btn" onClick={stop}>
          Stop
        </button>
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      <TimerInput handleSubmit={handleSetTime} />
      </div>
    </div>
  );
}

export default Timer;
