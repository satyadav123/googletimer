import { useState, useEffect } from "react";
function TimerInput({ handleSubmit }) {

  const [input,setInput] = useState("");
  
  const handleInput = (e) => {
    setInput(e.target.value);
  }
  return (
    <div id="timer-input-container">
      <input type="number" name="time-input" id="" value={input} onChange={(e) =>handleInput(e)} placeholder="Enter time in seconds"/>
      <button id="submit-btn" onClick={() => handleSubmit(input)}>
        Submit
      </button>
    </div>
  );
}

export default TimerInput;
