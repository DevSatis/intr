import React from 'react'
import { useEffect } from 'react';

const EvenOdd = (name) => {
  const msg = `hi ${name}!`;
  useEffect(()=>{
    document.title = `Welcome to you ${name}`;
  },[name])
  return(
    <div>
      {msg}
    </div>
  )
}

export default EvenOdd;