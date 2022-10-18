import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.scss";
import Login from "./Pages/Auth/Login";
import SelectSchool from "./Pages/Auth/SelectSchool";
import SignUp from "./Pages/Auth/SignUp";
import Home from "./Pages/Home/Home";
import RequireAuth from "./Auth/RequireAuth";
import PersistentLogin from "./Auth/PersistentLogin";
import DashboardLayout from "./Pages/Dashboard/DashboardLayout";
import Dashboard from "./Pages/Dashboard/Home/Dashboard";
import Subjects from "./Pages/Dashboard/Library/Subjects";
import Chat from "./Pages/Dashboard/Chats/Chat";
import Activities from "./Pages/Dashboard/Activities/Activities";
import Calendar from "./Pages/Dashboard/Calendar/Calendar";
import AuthLayout from "./Pages/Auth/AuthLayout";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="/Login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/selectschool" element={<SelectSchool />} />
        </Route>

        <Route element={<PersistentLogin />}>
          <Route element={<RequireAuth />}>
            <Route element={<DashboardLayout />}>
              <Route path=":firstName/dashboard/" element={<Dashboard />} />
              <Route path=":firstName/library" element={<Subjects />} />
              <Route path=":firstName/messages" element={<Chat />} />
              <Route path=":firstName/activities" element={<Activities />} />
              <Route path=":firstName/calendar" element={<Calendar />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
