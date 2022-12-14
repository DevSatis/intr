import App from "../App";
import { Routes, Route } from "react-router-dom";
import EvenOdd from "./EvenOdd";
import Fibonacci from "./Fibonacci";
import { useState } from "react";

const Main = () => {
  const [data, setData] = useState('');
  const [dataC, setDataC] = useState('');

  const mainToFiEo = ()=>{
    setData("This is data from main to fibonacci and Evenodd")
  }
  const appToMain = ()=>{
    
  }
  return (
    <div>
        <Routes>
        <Route path="/" element={<App  appToMain={appToMain} />}/>
        <Route path="/fibonacci" element={<Fibonacci mainToFiEo={data} />} />
        <Route path="/evenodd" element={<EvenOdd mainToFiEo={data} />} />
      </Routes>
    </div>
  )
}

export default Main