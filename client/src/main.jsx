import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./pages/Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);