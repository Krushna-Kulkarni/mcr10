import { createContext, useState } from "react";
import { inventoryData } from "../backend/inventoryData";

export const InventoryContext = createContext();
export const InventoryProvider = ({ children }) => {
  const allProducts = inventoryData;

  console.log({ allProducts: allProducts });

  const [filters, setFilters] = useState({
    department: "",
    isLowStock: false,
    feature: "Name",
  });

  const departmentFiltered =
    filters.department === "" || filters.department === "All"
      ? allProducts
      : allProducts.filter((item) => item.department === filters.department);

  console.log({ departmentfiltered: departmentFiltered });

  const stockFiltered = filters.isLowStock
    ? departmentFiltered.filter((item) => item.stock <= 10)
    : departmentFiltered;

  console.log({ stockFiltered: stockFiltered });

  const featureFiltered =
    filters.feature !== "" || filters.feature === "Name"
      ? stockFiltered.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
      : stockFiltered;

  console.log({ featureFiltered: featureFiltered });

  const products = featureFiltered;

  const departmentFilterHandler = (filterValue) => {
    setFilters({
      ...filters,
      department: filterValue,
    });
  };
  const stockFilterHandler = () => {
    setFilters({
      ...filters,
      isLowStock: !filters.isLowStock,
    });
  };
  const featureFilterHandler = (filterValue) => {
    setFilters({
      ...filters,
      feature: filterValue,
    });
  };

  return (
    <InventoryContext.Provider
      value={{
        products,
        stockFilterHandler,
        departmentFilterHandler,
        featureFilterHandler,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
