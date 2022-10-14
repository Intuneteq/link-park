import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdNotifications } from "react-icons/io";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  forwardRef,
} from "@chakra-ui/react";
// import Calendar from "../Calendar/Calendar"

import Calender from "./Calender/Calender";
import { Images } from "../../../Constants";
import useLogOut from "../../../hooks/useLogOut";

const BoardSchedule = () => {
  const logOut = useLogOut();
  const navigate = useNavigate();

  const signOut = async () => {
    await logOut();
    navigate("/");
  };

  const user = forwardRef((props, ref) => (
    <div ref={ref} {...props}>
      <img src={Images.profile} alt="profile" />
    </div>
  ));

  return (
    <div className="board__schedule column-flex">
      <section className="app__flex">
        <section>
          <IoMdNotifications />
          <span className="app__flex">1</span>
        </section>
        <Menu>
          <div className="board__schedule-user">
            <MenuButton as={user} />
          </div>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem onClick={signOut}>Sign Out</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </section>
      <div>
        <Calender />
        {/* <Calendar /> */}
      </div>
    </div>
  );
};

export default BoardSchedule;
