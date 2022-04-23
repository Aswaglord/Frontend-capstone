import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [active, setActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalNum;

    if (active) {
      intervalNum = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSeconds(computedSecond);
        setMinutes(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalNum);
  }, [active, counter]);

  const stopTimer = () => {
    setActive(false);
    setCounter(0);
    setSeconds("00");
    setMinutes("00");
  };

  return (
    <div className="timer-container">
      <div className="main-timer">
        <h1>
          {minutes} : {seconds}
        </h1>
      </div>
      <div className="buttons-container">
        <button onClick={() => setActive(!active)}>
          {active ? "Pause" : "Start"}
        </button>
        <button onClick={stopTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
