import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { BiMessageAltDetail } from "react-icons/bi";
import {
  IoIosArrowBack,
  IoIosNotificationsOutline,
  IoIosArrowForward,
} from "react-icons/io";
import Card from "../UI/Card";
import axios from "axios";
import SearchBox from "../search/SearchBox";

const Navbar = () => {
  return (
    <Card>
      <nav className="flex flex-row gap-12 items-center fixed-top  px-2 top-0 left-0">
        <div className="flex flex-row text-gray-100 gap-2">
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>
        <SearchBox />
        <div className="flex flex-row text-gray-100 gap-4 absolute right-0 z-10 w-40 origin-top-right rounded-md  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-2xl">
          <a className="block hover:text-black">
            <IoIosNotificationsOutline />
          </a>
          <a className="block hover:text-black">
            <BiMessageAltDetail />
          </a>
          <a className="block hover:text-black ">
            <CgProfile />
          </a>
        </div>
      </nav>
    </Card>
  );
};

export default Navbar;
