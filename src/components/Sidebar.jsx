import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { sidebar } from "../base/Sidebar";
import Button from "./Button";
import { toast } from "react-toastify";
import Logout from "./Logout";
import Following from "./Following";

const Sidebar = React.forwardRef((props, ref) => {
  const activeLink =
    "hover:bg-red-600 flex flex-row items-center gap-3 p-2  rounded-xl bg-red-600";
  const normalLink =
    "hover:bg-red-600 flex flex-row items-center gap-3 p-2  rounded-xl";

  return (
    <React.Fragment>
      <div
        ref={ref}
        className={`sidebar  rounded-xl absolute overflow-y-auto -translate-x-0 md:relative left:0  h-full bg-black pt-8 px-4 overflow-aut z-50 "}`}
      >
        <h1 className="text-red-600 font-bold text-3xl pb-3">
          <span className="text-white">movie.</span>HUB{" "}
        </h1>
        <div className="list-sidebar text-white mt-4">
          {sidebar.map((group) => (
            <div classname="" key={group.group}>
              <p className="text-whit pb-2 pl-1 text-sm opacity-50 mt-3">
                {group.group}
              </p>
              <NavLink className="flex flex-col gap-3 pl-1 ">
                {group.items.map((item) => (
                  <div
                    to={item.path}
                    key={item.name}
                    className={({ isActive }) =>
                      isActive ? "active sidebar-item" : "sidebar-item "
                    }
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      <span className="text-xl flex flex-row">{item.icon}</span>{" "}
                      {item.name}
                    </NavLink>
                  </div>
                ))}
              </NavLink>
            </div>
          ))}
          <Logout />
        </div>
      </div>
    </React.Fragment>
  );
});

export default Sidebar;
