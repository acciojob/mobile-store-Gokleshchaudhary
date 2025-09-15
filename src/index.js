// src/index.js
import React from "react";
import ReactDOM from "react-dom"; // React-16 syntax (NOT react-dom/client)
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProductProvider } from "./context/ProductContext";

ReactDOM.render(
  <BrowserRouter>
    <ProductProvider>
      <App />
    </ProductProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
