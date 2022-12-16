import React from "react";
import FeedCard from "../UI/FeedCard";
import { FiLogOut } from "react-icons/fi";

const Logout = () => {
  return (
    
      <div className=" m-2 bg-gray-900 w-[20%] rounded text-white flex items-center gap-2 p-4 hover:text-red-500 fixed fixed h-12 bottom-0 left-0 ">
        <FiLogOut />
        <a>Log Out</a>
      </div>
    
  );
};

export default Logout;
