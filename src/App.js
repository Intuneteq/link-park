import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.scss";
import Login from "./Pages/Auth/Login";
import SelectSchool from "./Pages/Auth/SelectSchool";
import SignUp from "./Pages/Auth/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import RequireAuth from "./Auth/RequireAuth";
import Subjects from "./Pages/Dashboard/Subjects";
import DashboardLayout from "./DashboardComponents/DashboardLayout";
import PersistentLogin from "./Auth/PersistentLogin";
import Chat from "./Pages/Dashboard/Chat";
import Activities from "./Pages/Dashboard/Activities";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/selectschool" element={<SelectSchool />} />

        <Route element={<PersistentLogin />}>
          <Route element={<RequireAuth />}>
            <Route element={<DashboardLayout />}>
              <Route path=":firstName/dashboard/" element={<Dashboard />} />
              <Route path=":firstName/library" element={<Subjects />} />
              <Route path=":firstName/messages" element={<Chat />} />
              <Route path=":firstName/activities" element={<Activities />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
