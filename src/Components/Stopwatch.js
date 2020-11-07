import React, { useState, useEffect } from "react";
import { timeFormater2 } from "./functions/dateHandler";
import styles from "../css/Stopwatch.module.css";

const Stopwatch = (props) => {
  const timeClock = (milliseconds) => {
    var day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    return {
      day: day.toString().padStart(2, "0"),
      hour: hour.toString().padStart(2, "0"),
      minute: minute.toString().padStart(2, "0"),
      seg: seconds.toString().padStart(2, "0"),
    };
  };
  // const start = Date.now();

  const [count, setCount] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(timeClock(Date.now() - props.time));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div>{count.hour}</div>
        <p>:</p>
        <div>{count.minute}</div>
        <p>:</p>
        <div>{count.seg}</div>
      </div>
      <div>hrs : min : seg</div>
    </>
  );
};

export default Stopwatch;
