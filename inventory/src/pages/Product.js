import React, { useContext } from "react";
import { InventoryContext } from "../contexts/InventoryContext";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";

const Product = () => {
  const { products } = useContext(InventoryContext);
  const { productId } = useParams();

  const product = products.find((item) => item.id === Number(productId));

  return (
    <div className="grid lg:grid-cols-[12rem_1fr]">
      <Sidebar />
      <div className="p-4">
        <h1 className="text-xl font-bold">{product?.name}</h1>
        <div className="flex flex-col gap-1 w-96 ">
          <div>
            <img src={product?.imageUrl} alt="product" className="w-56 h-64" />
          </div>
          <div>
            <ul>
              <li>Price: {product?.price} </li>
              <li>Stock: {product?.stock} </li>
              <li>Supplier: {product?.supplier} </li>
              <li>Department:{product?.department} </li>
              <li>SKU: {product?.sku} </li>
              <li>Delivered: {product?.delivered} </li>
              <li>Description: {product?.description} </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
