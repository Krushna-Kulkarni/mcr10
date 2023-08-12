import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { InventoryContext } from "../contexts/InventoryContext";

export const Departments = () => {
  const { departments } = useContext(InventoryContext);

  return (
    <div className="grid lg:grid-cols-[12rem_1fr]">
      <Sidebar />
      <div className="p-4">
        <div className="flex gap-2">
          {departments.map((department) => {
            return (
              <div className="flex justify-center items-center border-solid border-2 border-gray-400 p-2 w-[12rem] h-[8rem]">
                <div className="text-xl">{department}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
