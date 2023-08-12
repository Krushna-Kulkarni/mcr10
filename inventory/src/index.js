import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {
  InventoryContext,
  InventoryProvider,
} from "./contexts/InventoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
export { InventoryContext };
root.render(
  <React.StrictMode>
    <Router>
      <InventoryProvider>
        <App />
      </InventoryProvider>
    </Router>
  </React.StrictMode>
);
