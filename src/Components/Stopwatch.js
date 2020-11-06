import React, { useState, useEffect } from "react";
import { timeFormater2 } from "./functions/dateHandler";

const Stopwatch = (props) => {
  // const start = Date.now();

  const [count, setCount] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(timeFormater2(Date.now() - props.time));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Aquí va el stopwatch {count}</p>
    </div>
  );
};

export default Stopwatch;
