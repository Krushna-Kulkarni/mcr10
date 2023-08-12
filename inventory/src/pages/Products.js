import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { InventoryContext } from "../contexts/InventoryContext";
import { NavLink } from "react-router-dom";

export const Products = () => {
  const {
    products,
    stockFilterHandler,
    departmentFilterHandler,
    featureFilterHandler,
  } = useContext(InventoryContext);
  const departments = products?.reduce((acc, curr) => {
    if (!acc.includes(curr.department)) {
      acc.push(curr.department);
    }
    return acc;
  }, []);

  return (
    <div className="grid lg:grid-cols-[12rem_1fr]">
      <Sidebar />
      <div className="p-4">
        <div className="flex justify-evenly gap-24 items-center border-solid border-2 border-gray-600">
          <div className="text-xl">Products</div>
          <div>
            <ul className="flex justify-between">
              <li className="p-4">
                <select
                  onChange={(e) => departmentFilterHandler(e.target.value)}
                  name="departments"
                  id="departments-select"
                >
                  <option value="All">All Departments</option>
                  {departments.map((department) => {
                    return (
                      <option key={department} value={department}>
                        {department}
                      </option>
                    );
                  })}
                </select>
              </li>
              <li className="p-4">
                <label>
                  <input
                    onChange={stockFilterHandler}
                    type="checkbox"
                    name="lowStockItems"
                  />
                  Low Stock Items
                </label>
              </li>
              <li className="p-4">
                <select onChange={(e) => featureFilterHandler(e.target.value)}>
                  <option value="Name">Name</option>
                  <option value="Price">Price</option>
                  <option value="Stock">Stock</option>
                </select>
              </li>
            </ul>
          </div>
          <div>
            <button className="flex justify-center items-center rounded-md text-white w-24 h-8 bg-blue-500 text-md p-2">
              New
            </button>
          </div>
        </div>
        <div className="m-2">
          <table className="bordersolid border-2 border-gray-700 w-[80rem]">
            <thead>
              <tr className="bg-orange-200">
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Supplier</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const {
                  id,
                  name,
                  description,
                  price,
                  stock,
                  supplier,
                  imageUrl,
                } = product;
                return (
                  <tr
                    key={id}
                    className="border-solid border-b-2 border-gray-400"
                  >
                    <td className="p-1">
                      <img src={imageUrl} alt="product" className="w-10 h-10" />
                    </td>
                    <td className="p-1">
                      <NavLink to={`/Products/${id}`}>{name}</NavLink>
                    </td>
                    <td className="p-1">{description}</td>
                    <td className="p-1">{price}</td>
                    <td className="p-1">{stock}</td>
                    <td className="p-1">{supplier}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
