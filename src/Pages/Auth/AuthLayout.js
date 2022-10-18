import React from 'react';
import { Outlet } from "react-router-dom";

import Navbar from "../../Components/Navbar/Navbar";

const AuthLayout = () => {
  return (
    <>
            <Navbar />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default AuthLayout;