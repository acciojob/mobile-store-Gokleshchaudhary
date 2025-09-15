import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductForm from "./ProductForm";

export default function AdminPanel() {
  const { products, deleteProduct } = useProducts();
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={() => setShowForm((s) => !s)}>
        {showForm ? "Cancel" : "Add Product"}
      </button>

      {showForm && <ProductForm onDone={() => setShowForm(false)} />}

      <table style={{ width: "100%", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>
                <Link to={`/products/${p.id}`}>{p.name}</Link>
              </td>
              <td>${p.price}</td>
              <td>
                <button
                  className="float-right"
                  onClick={() => deleteProduct(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
