import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { CgArrowLongRight } from "react-icons/cg";
import { TiThMenuOutline } from "react-icons/ti";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
  const user = {
    student: "Student",
    parent: "Parent",
  };

  const [toggle, setToggle] = useState(false);
  // const [showMenuLog, setShowMenuLog] = useState(false);

  const initialFocusRef = React.useRef();

  return (
    <nav className="app__flex-2">
      <div className="nav__logo">
        <h1>Link-Park</h1>
      </div>
      <ul className="nav__links app__flex-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Programs</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <Popover
          initialFocusRef={initialFocusRef}
          placement="bottom"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <li>Student</li>
          </PopoverTrigger>
          <PopoverContent
            color="brand.200"
            bg="brand.100"
            border="0"
            display="flex"
            flex-direction="column"
            alignItems="center"
            justifyContent="center"
            size="lg"
          >
            <PopoverBody>
              <p>
                <Link to="/">{user.student}</Link>
              </p>
              <p>
                <Link to="/">{user.parent}</Link>
              </p>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <li>
          <Link to="/">About us</Link>
        </li>
      </ul>
      <div className="nav__user app__flex">
        <Link to="/selectschool">Login</Link>
        <Link id="sign-up" to="/selectschool">
          Sign up
        </Link>
      </div>

      <section className="nav__menu">
        <TiThMenuOutline onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            initial={{ opacity: 0, x: -100, y: -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              ease: "easeInOut",
              staggerChildren: 0.5
            }}
            className="nav__menu-body"
          >
            <article>
              <ul>
                <li className="app__flex">
                  <Link to="/">Home</Link> <span><CgArrowLongRight /></span>
                </li>
                <li className = "app__flex">
                  <Link to="/">Programs</Link> <span><CgArrowLongRight /></span>
                </li>
                <li className = "app__flex">
                  <Link to="/">Blog</Link> <span><CgArrowLongRight /></span>
                </li>
                <Popover
                  initialFocusRef={initialFocusRef}
                  placement="bottom"
                  closeOnBlur={false}
                >
                  <PopoverTrigger>
                    <li className="app__flex">Student</li>
                  </PopoverTrigger>
                  <PopoverContent
                    color="brand.200"
                    bg="brand.100"
                    border="0"
                    display="flex"
                    flex-direction="column"
                    alignItems="center"
                    justifyContent="center"
                    size="lg"
                  >
                    <PopoverBody>
                      <p>
                        <Link to="/">{user.student}</Link>
                      </p>
                      <p>
                        <Link to="/">{user.parent}</Link>
                      </p>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
                <li className = "app__flex">
                  <Link to="/">About us</Link> <span><CgArrowLongRight /></span>
                </li>
              </ul>
              <section className="app__flex">
                <div className="app__flex user-user">
                  <FaUser />
                </div>
                <motion.div
                  className="user-login app__flex"
                >
                  <Link to="/selectschool">Login</Link>
                  <Link to="/selectschool">
                    Sign up
                  </Link>
                </motion.div>
              </section>
            </article>
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className='exit app__flex'
            >
              <HiX onClick={() => setToggle(false)} />
            </motion.div>
          </motion.div>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
