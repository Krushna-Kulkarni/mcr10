import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-600 lg:h-screen">
      <ul className="text-white">
        <li className="p-2 m-2 border-solid border-white border-2 cursor-pointer">
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li className="p-2 m-2 border-solid border-white border-2 cursor-pointer">
          <NavLink to="/departments">Departments</NavLink>
        </li>
        <li className="p-2 m-2 border-solid border-white border-2 cursor-pointer">
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
