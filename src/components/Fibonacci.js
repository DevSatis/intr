import React from 'react'

import {usePrevious, useState} from "react";

const Fibonacci = () => {
  const [count, setCount] = useState(1);
  const previousCount = useState(count); 

  const addCount = () => {
    setCount(count + previousCount);
  };

  return (
    <div>
      <div>previousCount: {previousCount}</div>
      <div>count: {count}</div>
      <button onClick={addCount}>click me</button>
    </div>
  );
}

export default Fibonacci