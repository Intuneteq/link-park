import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { CgArrowLongRight } from "react-icons/cg";
import { TiThMenuOutline } from "react-icons/ti";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import "./Navbar.scss";

const Navbar = () => {
  const user = {
    student: "Student",
    parent: "Parent",
  };
  const [isMenu, setIsMenu] = useState(false);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "intuneteq",
    },
  });
  const myImage = cld.image("v1663392950/link-park/Link-park-logo_e8hgxr.png");
  myImage.format("auto").quality("auto");

  const menuVariants = {
    open: {
      opacity: 1,
      clipPath: `circle(1000px at 40px 40px)`,
      transition: {
        duration: 5,
      },
    },

    closed: {
      clipPath: `circle(0 at 40px 40px)`,
      transition: {
        duration: 15,
      },
    },
  };

  const listVariant = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },

    closed: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  const ulVariant = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <nav className="app__flex-2">
      <div className="nav__logo">
        <AdvancedImage cldImg={myImage} />
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

        <div className="app__flex">
          <li onMouseEnter={() => setIsMenu(true)}>student</li>
          <AnimatePresence>
            {isMenu && (
              <motion.ul
                className="student-menu"
                initial={{ opacity: 0, y: "-50%" }}
                animate={{ opacity: 1, y: "0%" }}
                exit={{
                  opacity: 0,
                  y: "-50%",
                  transition: { duration: "0.35" },
                }}
                transition={{
                  type: "spring",
                  stiffness: "100",
                  duration: "0.75",
                }}
                onMouseEnter={() => setIsMenu(true)}
                onMouseLeave={() => setIsMenu(false)}
              >
                <li>{user.student}</li>
                <li>{user.parent}</li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
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

      <motion.section
        className="nav__menu"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <TiThMenuOutline onClick={() => toggleOpen()} />
        {isOpen && (
          <motion.div variants={menuVariants} className="nav__menu-body">
            <article>
              <motion.ul variants={ulVariant}>
                <li className="app__flex" variants={listVariant}>
                  <Link to="/">Home</Link>{" "}
                  <span>
                    <CgArrowLongRight />
                  </span>
                </li>
                <li className="app__flex" variants={listVariant}>
                  <Link to="/">Programs</Link>{" "}
                  <span>
                    <CgArrowLongRight />
                  </span>
                </li>
                <li className="app__flex" variants={listVariant}>
                  <Link to="/">Blog</Link>{" "}
                  <span>
                    <CgArrowLongRight />
                  </span>
                </li>

                <li className="app__flex">
                  <Link to="/">About us</Link>{" "}
                  <span>
                    <CgArrowLongRight />
                  </span>
                </li>
              </motion.ul>
              <section className="app__flex" variants={listVariant}>
                <div className="app__flex user-user">
                  <FaUser />
                </div>
                <motion.div className="user-login app__flex">
                  <Link to="/selectschool">Login</Link>
                  <Link to="/selectschool">Sign up</Link>
                </motion.div>
              </section>
            </article>
            <motion.div
              whileTap={{ scale: 1.3 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="exit app__flex"
            >
              <HiX onClick={() => toggleOpen()} />
            </motion.div>
          </motion.div>
        )}
      </motion.section>
    </nav>
  );
};

export default Navbar;
