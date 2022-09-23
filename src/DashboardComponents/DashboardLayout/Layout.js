import React from 'react';
import { Outlet } from 'react-router-dom';
import BoardNav from '../BoardNav';

const Layout = () => {
  return (
    <main>
        <BoardNav />
        <Outlet />
    </main>
  )
}

export default Layout