import './App.css';
import Stopwatch from './components/stopwatch.js';
import Timer from './components/timer.js';
import {useState,useRef, useEffect} from 'react';

function App() {
  const [showTimer,setShowTimer] = useState(true);

  const timerTab = useRef(null);
  const stopwatchTab = useRef(null);
  
  useEffect(() => {
      document.querySelector("#timer").classList.toggle("selected");
      document.querySelector("#stopwatch").classList.toggle("selected");
  },[showTimer]);
  return (
    <div className="App">
      <div id="tabs">
        <div
          id="timer"
          ref={timerTab}
          className="selected"
          onClick={() => {
            if (!showTimer) {
              setShowTimer(true);
            
            }
          }}
        >
         <button>TIMER</button> 
        </div>
        <div
          id="stopwatch"
          ref={stopwatchTab}
          onClick={() => {
            if (showTimer) {
              setShowTimer(false);

            }
          }}
        >
         <button>STOPWATCH</button> 
        </div>
      </div>
      <div id="content">{showTimer ? <Timer /> : <Stopwatch />}</div>
    </div>
  );
}

export default App;
