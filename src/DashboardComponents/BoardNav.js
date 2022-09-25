import React, { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faBook, faMessage, faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from "framer-motion";

import { Images } from "../Constants";
import { NavLink } from "react-router-dom";

const BoardNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "intuneteq",
    },
  });
  const myImage = cld.image("v1663392950/link-park/Link-park-logo_e8hgxr.png");
  myImage.format("auto").quality("auto");

  const routes = [
    {
      path: "/leeny/dashboard",
      name: "Dashboard",
      icon: <FontAwesomeIcon icon={faSchool} />,
    },

    {
      path: "/leeny/library",
      name: "Library",
      icon: <FontAwesomeIcon icon={faBook} />,
    },

    {
      path: "/leeny/activities",
      name: "Activities",
      icon: <FontAwesomeIcon icon={faPersonRunning} />,
    },
    {
      path: "/leeny/messages",
      name: "Messages",
      icon: <FontAwesomeIcon icon={faMessage} />,
    },
  ];

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="board__nav">
      <motion.div
        animate={{
          width: isOpen ? "200px" : "65px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className="board__nav-container column-flex"
      >
        <div className="board__nav-logo" onClick={toggle}>
          <AdvancedImage cldImg={myImage} />
        </div>
        <div className="board__nav-links">
          {routes.map((route) => (
            <NavLink to={route.path} key={route.name} className="app__flex-3" activeclassname ="active">
              <div>{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.p
                    className="p-text"
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                  >
                    {route.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </div>
        <div className="board__nav-user">
          <img src={Images.profile} alt="profile" />
        </div>
      </motion.div>
    </div>
  );
};

export default BoardNav;
