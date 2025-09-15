// src/components/ProductDetails.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import ProductForm from "./ProductForm";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProduct } = useProducts();
  const product = getProduct(id);
  const [edit, setEdit] = useState(false);

  if (!product) return <p style={{ color: "red" }}>Product not found</p>;

  return (
    <div>
      <button className="btn" onClick={() => navigate(-1)}>
        Back
      </button>

      {edit ? (
        <ProductForm
          existing={product}
          onDone={() => {
            setEdit(false);
            navigate(0); // refresh view with new data
          }}
        />
      ) : (
        <>
          <img src={product.image} alt={product.name} width="300" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <button className="float-right" onClick={() => setEdit(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}
