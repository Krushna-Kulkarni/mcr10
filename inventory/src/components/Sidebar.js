import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-600 lg:h-screen">
      <ul className="text-white">
        <NavLink to="/">
          <li className="p-2 m-2 border-solid border-white border-2 cursor-pointer">
            Dashboard
          </li>
        </NavLink>
        <NavLink to="/departments">
          <li className="p-2 m-2 border-solid border-white border-2 cursor-pointer">
            Departments
          </li>
        </NavLink>
        <NavLink to="/products">
          <li className="p-2 m-2 border-solid border-white border-2 cursor-pointer">
            Products
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
