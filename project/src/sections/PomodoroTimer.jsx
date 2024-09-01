import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [time, setTime] = useState(25 * 60); // initial time set to 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("pomodoro"); // modes: pomodoro, shortBreak, longBreak

  useEffect(() => {
    let timer;
    if (isActive && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(timer);
      setIsActive(false);
      alert("Time's up!");
    }
    return () => clearInterval(timer);
  }, [isActive, time]);

  const toggleStart = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(25 * 60); // reset to 25 minutes
  };

  const switchMode = (newMode) => {
    setIsActive(false);
    setMode(newMode);
    if (newMode === "pomodoro") setTime(25 * 60);
    else if (newMode === "shortBreak") setTime(5 * 60);
    else if (newMode === "longBreak") setTime(15 * 60);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  return (
    <div className="max-w-sm mx-auto rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Personal</h2>
        <div className="flex space-x-2">
          <div className="h-2 w-2 bg-black rounded-full"></div>
          <div className="h-2 w-2 bg-black rounded-full"></div>
          <div className="h-2 w-2 bg-black rounded-full"></div>
        </div>
      </div>
      <div className="text-center mb-4">
        <h1 className="text-6xl font-bold">{formatTime()}</h1>
      </div>
      <div className="flex justify-center mb-4">
        <button
          onClick={toggleStart}
          className="px-6 py-2 text-lg font-semibold bg-black text-white rounded-lg shadow-sm"
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button
          onClick={resetTimer}
          className="ml-4 text-lg font-semibold text-black"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-2A9 9 0 1112 3v1m0 0h5m-5 0V3"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-around text-sm font-semibold">
        <button
          onClick={() => switchMode("pomodoro")}
          className={`${
            mode === "pomodoro" ? "border-b-2 border-black" : ""
          } pb-1`}
        >
          Pomodoro
        </button>
        <button
          onClick={() => switchMode("shortBreak")}
          className={`${
            mode === "shortBreak" ? "border-b-2 border-black" : ""
          } pb-1`}
        >
          Short Break
        </button>
        <button
          onClick={() => switchMode("longBreak")}
          className={`${
            mode === "longBreak" ? "border-b-2 border-black" : ""
          } pb-1`}
        >
          Long Break
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
