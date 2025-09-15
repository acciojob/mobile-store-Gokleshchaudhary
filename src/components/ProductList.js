import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export default function ProductList() {
  const { products } = useProducts();

  return (
    <div>
      <h2>Mobile Store</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", width: 220 }}>
            <img src={p.image} alt={p.name} width="100%" />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <Link to={`/products/${p.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
