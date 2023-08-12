import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { InventoryContext } from "../contexts/InventoryContext";

const Dashboard = () => {
  const { totalStock, totalDelivered, lowStockItems } =
    useContext(InventoryContext);

  return (
    <div className="grid lg:grid-cols-[12rem_1fr]">
      <Sidebar />
      <div className="p-4">
        <div className="flex gap-2">
          <div className="flex flex-col justify-center items-center border-solid border-2 border-gray-400 p-2 gap-1 w-[12rem] h-[8rem]">
            <div className="text-xl text-green-600">{totalStock}</div>
            <div className="text-xl">totalStock</div>
          </div>
          <div className="flex flex-col justify-center items-center border-solid border-2 border-gray-400 p-2 gap-1 w-[12rem] h-[8rem]">
            <div className="text-xl text-yellow-600">{totalDelivered}</div>
            <div className="text-xl">totalDelivered</div>
          </div>
          <div className="flex flex-col justify-center items-center border-solid border-2 border-gray-400 p-2 gap-1 w-[12rem] h-[8rem]">
            <div className="text-xl text-red-600">{lowStockItems}</div>
            <div className="text-xl">lowStockItems</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
