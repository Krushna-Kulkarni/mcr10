import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { InventoryContext } from "../contexts/InventoryContext";

export const Departments = () => {
  const { departments, departmentFilterHandler } = useContext(InventoryContext);
  const navigate = useNavigate();
  return (
    <div className="grid lg:grid-cols-[12rem_1fr]">
      <Sidebar />
      <div className="p-4">
        <div className="flex gap-2">
          {departments.map((department) => {
            return (
              <div
                key={department}
                onClick={() => {
                  departmentFilterHandler(department);
                  navigate("/Products");
                }}
                className="flex justify-center items-center border-solid border-2 border-gray-400 p-2 w-[12rem] h-[8rem] cursor-pointer"
              >
                <div className="text-xl">{department}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
