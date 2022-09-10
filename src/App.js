import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Login from "./Pages/Auth/Login";
import SelectSchool from "./Pages/Auth/SelectSchool";
import SignUp from "./Pages/Auth/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/fullname/dashboard" element={<Dashboard />} />
        <Route path="/selectschool" element={ <SelectSchool />} />
      </Routes>
    </div>
  );
}

export default App;
