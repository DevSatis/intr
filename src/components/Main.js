import App from "../App";
import { Routes, Route } from "react-router-dom";
import EvenOdd from "./EvenOdd";
import Fibonacci from "./Fibonacci";
import { useState } from "react";

const Main = () => {
  const [data, setData] = useState('');

  const mainToApp = ()=>{
    setData("This is data from main to App")
  }
  return (
    <div>
        <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/fibonacci" element={<Fibonacci />} />
        <Route path="/evenodd" element={<EvenOdd />} />
      </Routes>
    </div>
  )
}

export default Main