import React, { useState, useMemo } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faBook,
  faMessage,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import { ImMenu } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

import useAppProvider from "../../../hooks/useAppProvider";

const BoardNav = () => {
  const [isOpen, setIsOpen] = useState(false);
 const [mobile, setMobile] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toggleMobile = () => setMobile(!mobile);
  const { userProfile } = useAppProvider();
  const firstName = useMemo(() => userProfile.firstName, [userProfile]);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "intuneteq",
    },
  });

  const myImage = cld.image("v1663392950/link-park/Link-park-logo_e8hgxr.png");
  myImage.format("auto").quality("auto");

  const routes = [
    {
      path: `/${firstName}/dashboard`,
      name: "Dashboard",
      icon: <FontAwesomeIcon icon={faSchool} />,
    },

    {
      path: `/${firstName}/library`,
      name: "Library",
      icon: <FontAwesomeIcon icon={faBook} />,
    },

    {
      path: `/${firstName}/activities`,
      name: "Activities",
      icon: <FontAwesomeIcon icon={faPersonRunning} />,
    },
    {
      path: `/${firstName}/messages`,
      name: "Messages",
      icon: <FontAwesomeIcon icon={faMessage} />,
    },
    {
      path: `/${firstName}/calendar`,
      name: "Calendar",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          />
        </svg>
      ),
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

  const menuBar = (
    <motion.div
      animate={{
        width: isOpen ? "230px" : "65px",
        transition: {
          duration: 0.5,
          type: "spring",
          damping: 10,
        },
      }}
      className="board__nav-container"
    >
      <div className="board__nav-logo" onClick={toggle}>
        <AdvancedImage cldImg={myImage} />
      </div>
      <div className="board__nav-links">
        {routes.map((route) => (
          <NavLink
            to={route.path}
            key={route.name}
            className="app__flex-3"
            activeclassname="active"
          >
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
      <div className="board__nav-settings">
        <svg
          color="white"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </motion.div>
  );

  return (
    <>
      <div className="borad__nav-mobile">
        <article className="app__flex" onClick={toggleMobile}>
          <ImMenu />
        </article>
        {mobile && menuBar}
      </div>
      <div className="board__nav">{menuBar}</div>
    </>
  );
};

export default BoardNav;
