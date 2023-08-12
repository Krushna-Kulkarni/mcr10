import { createContext, useState } from "react";
import { inventoryData } from "../backend/inventoryData";

export const InventoryContext = createContext();
export const InventoryProvider = ({ children }) => {
  const allProducts = inventoryData;

  const departments = allProducts?.reduce((acc, curr) => {
    if (!acc.includes(curr.department)) {
      acc.push(curr.department);
    }
    return acc;
  }, []);

  const { totalStock, totalDelivered, lowStockItems } = allProducts.reduce(
    (acc, curr) => {
      acc = {
        ...acc,
        totalStock: acc.totalStock + curr.stock,
        totalDelivered: acc.totalDelivered + curr.delivered,
        lowStockItems: acc.lowStockItems + (curr.stock <= 10 ? 1 : 0),
      };
      return acc;
    },
    { totalStock: 0, totalDelivered: 0, lowStockItems: 0 }
  );

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
        departments,
        totalStock,
        totalDelivered,
        lowStockItems,
        stockFilterHandler,
        departmentFilterHandler,
        featureFilterHandler,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
