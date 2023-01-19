import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { sidebar } from "../base/Sidebar";
import Button from "./Button";
import { toast } from "react-toastify";

const Sidebar = React.forwardRef((props, ref) => {
  const { showNav } = props;

  return (
    <div
      ref={ref}
      className={` sidebar m-2 rounded-xl absolute overflow-y-auto -translate-x-0 md:relative left:0 w-[100%] max-w-[300px] min-w-[200px] h-full bg-black pt-8 px-4 overflow-auto z-50 "}`}
    >
      <h1 className="text-red-600 font-bold text-3xl pb-3">
        <span className="text-white">movie.</span>HUB{" "}
      </h1>
      <div className="list-sidebar text-white mt-4">
        {sidebar.map((group) => (
          <div classname="pt-4 bg-dark_black" key={group.group}>
            <p className="text-white pb-2 pl-1 text-sm opacity-50 mt-3">
              {group.group}
            </p>
            <div className="flex flex-col gap-3 pl-1 ">
              {group.items.map((item) => (
                <NavLink 
                  to={item.path}
                  key={item.name}
                  className={({ isActive }) =>
                    isActive ? "active sidebar-item" : "sidebar-item "
                  }
                >
                  {" "}<div className="flex flex-row items-center gap-3 p-2 hover:bg-red-600 rounded-xl"><span className="text-xl flex flex-row">{item.icon}</span> {item.name}</div>
                  
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Sidebar;
