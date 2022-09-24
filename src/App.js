import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.scss";
import Login from "./Pages/Auth/Login";
import LoginAuth from "./Pages/Auth/LoginAuth";
import SelectSchool from "./Pages/Auth/SelectSchool";
import SignUp from "./Pages/Auth/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import RequireAuth from "./Auth/RequireAuth";
import Subjects from "./DashboardComponents/Subjects";
import PersistentLogin from "./Auth/PersistentLogin";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Loginauth" element={<LoginAuth />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/selectschool" element={<SelectSchool />} />

        {/* protected routes */}
        <Route element={<PersistentLogin />}>
          <Route element={<RequireAuth />}>
            <Route path=":firstName/dashboard" element={<Dashboard />} />
            <Route path=":firstName/dashboard/subjects" element={<Subjects />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
