import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import AdminPanel from "./components/AdminPanel";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProductList />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="admin" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
