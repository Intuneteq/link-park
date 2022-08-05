import React from "react";
import { Link } from "react-router-dom";

import './Navbar.scss';


const Navbar = () => {
  const user = {
    student: "Student",
    parent: "Parent",
  };
  return (
    <nav className="app__flex-2">
      <div className="nav__logo">
        <h1>Link-Park</h1>
      </div>
      <ul className="nav__links app__flex-2">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>Programs</Link>
        </li>
        <li>
          <Link to='/'>Blog</Link>
        </li>
        <li className="drop">
            Student
          <div className="dropdown">
            <p><Link to='/'>{user.student}</Link></p>
            <p><Link to='/'>{user.parent}</Link></p>
          </div>
        </li>
        <li>
          <Link to='/'>About us</Link>
        </li>
      </ul>
      <div className="nav__user app__flex">
        <Link to="/">Login</Link>
        <Link className="sign-up" to="/">Sign up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
