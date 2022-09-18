import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.scss";
import Login from "./Pages/Auth/Login";
import SelectSchool from "./Pages/Auth/SelectSchool";
import SignUp from "./Pages/Auth/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import RequireAuth from "./Components/RequireAuth";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/selectschool" element={<SelectSchool />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="/:firstName/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
