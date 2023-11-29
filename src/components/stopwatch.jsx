import { useEffect, useState } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setTime((time) => time + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  function startTimer() {
    setIsRunning(true);
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function clearTimer() {
    if (isRunning) {
      setIsRunning(false);
    }
    setTime(0);
  }
  return (
    <div>
      <hr />
      <h1>StopWatch</h1>
      <div id="watch">
        <span id="seconds">{time}</span> seconds
      </div>
      <button
        id="start"
        onClick={() => {
          startTimer();
        }}
      >
        Start
      </button>
      <button
        id="stop"
        onClick={() => {
          stopTimer();
        }}
      >
        Stop
      </button>
      <button
        id="clear"
        onClick={() => {
          clearTimer();
        }}
      >
        Clear
      </button>
    </div>
  );
}
