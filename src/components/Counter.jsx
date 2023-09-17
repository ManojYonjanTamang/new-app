import React, { useState } from "react";
import "./HookCSS.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="counter">
        <button onClick={increment}>Increment</button>
        <h1 align="center">Count:{count}</h1>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
