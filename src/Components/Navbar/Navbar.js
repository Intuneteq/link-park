import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMenuBook } from "react-icons/md";
import { HiX } from "react-icons/hi";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
// import { CgMenuBoxed } from "react-icons/cg";

import "./Navbar.scss";

const Navbar = () => {
  const user = {
    student: "Student",
    parent: "Parent",
  };

  const [toggle, setToggle] = useState(false);

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
        <Link to="/Login">Login</Link>
        <Link id="sign-up" to="/">
          Sign up
        </Link>
      </div>

      <section className="nav__menu">
        <MdOutlineMenuBook onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            initial={{ opacity: 0, x: -100, y: -100}}
            animate={{ opacity: 1, x: 0, y: 0}}
            transition={{
              duration: 0.4,
              delay: 0.5,
              ease: "easeInOut",
              staggerChildren: 0.5,
            }}
          >
            <ul>
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
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
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
