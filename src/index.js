import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import { BrowserRouter, } from "react-router-dom";
import NewApp from "./components/NewApp";
// import Main from "./components/Main";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Main /> */}
      <NewApp />
    </BrowserRouter>
  </React.StrictMode>
);
