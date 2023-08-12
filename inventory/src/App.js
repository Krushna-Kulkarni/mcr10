import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Departments } from "./pages/Departments";
import { Products } from "./pages/Products";
import Product from "./pages/Product";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Products/:productId" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
