import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
// import Calender from "./Components/Calender/Calender";
import Login from "./Pages/Auth/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/fullname/dashboard" element={<Dashboard />} />
        {/* <Route path= "/calender" element={<Calender />} /> */}
      </Routes>
    </div>
  );
}

export default App;
