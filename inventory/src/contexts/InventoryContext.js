import { createContext, useState } from "react";
import { inventoryData } from "../backend/inventoryData";

export const InventoryContext = createContext();
export const InventoryProvider = ({ children }) => {
  //   const [allProducts, setAllProducts] = useState();
  const allProducts = inventoryData;

  const departments = allProducts?.reduce((acc, curr) => {
    if (!acc.includes(curr.department)) {
      acc.push(curr.department);
    }
    return acc;
  }, []);

  const { totalStock, totalDelivered, lowStockItems } = allProducts?.reduce(
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

  const [filters, setFilters] = useState({
    department: "",
    isLowStock: false,
    feature: "",
  });

  const departmentFiltered =
    filters.department === "" || filters.department === "All"
      ? allProducts
      : allProducts.filter((item) => item.department === filters.department);

  const stockFiltered = filters.isLowStock
    ? departmentFiltered.filter((item) => item.stock <= 10)
    : departmentFiltered;

  let featureFiltered;

  if (filters.feature === "") {
    featureFiltered = stockFiltered.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  } else {
    featureFiltered = stockFiltered.sort(function (a, b) {
      if (a[filters.feature] < b[filters.feature]) {
        return -1;
      }
      if (a[filters.feature] > b[filters.feature]) {
        return 1;
      }
      return 0;
    });
  }
  const products = featureFiltered;

  const departmentFilterHandler = (filterValue) => {
    setFilters({
      ...filters,
      department: filterValue,
    });
  };
  const stockFilterHandler = (e) => {
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
