import React, { createContext, useContext, useState } from "react";
import { initialProducts } from "../data/seed";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProducts);

  const getProduct = (id) => products.find((p) => p.id === Number(id));

  const addProduct = (product) =>
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);

  const updateProduct = (updated) =>
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));

  const deleteProduct = (id) =>
    setProducts((prev) => prev.filter((p) => p.id !== id));

  return (
    <ProductContext.Provider
      value={{ products, getProduct, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
