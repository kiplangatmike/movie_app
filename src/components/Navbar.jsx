import React from "react";
import { CgProfile } from "react-icons/cg";
import { BiMessageAltDetail } from "react-icons/bi";
import { GrNotification } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Card from "../UI/Card";

const Navbar = () => {
  return (
    <Card>
      <nav className="flex flex-row gap-12 space-between  m-4 px-2 py-4">
        <div className="text-gray-100">
          <a>Movie Shop</a>
        </div>
        <div className="flex flex-row text-gray-100">
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>
        <div>
          <input placeholder="Search everything" />
        </div>
        <div className="flex flex-row text-gray-100">
          <CgProfile />
          <BiMessageAltDetail />
          <GrNotification />
        </div>
      </nav>
    </Card>
  );
};

export default Navbar;
