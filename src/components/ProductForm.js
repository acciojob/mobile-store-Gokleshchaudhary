import React, { useState, useEffect } from "react";
import { useProducts } from "../context/ProductContext";

export default function ProductForm({ existing, onDone }) {
  const { addProduct, updateProduct } = useProducts();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (existing)
      setForm({
        name: existing.name,
        description: existing.description,
        price: existing.price,
        image: existing.image,
      });
  }, [existing]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...form, price: Number(form.price) };
    if (existing) {
      updateProduct({ ...payload, id: existing.id });
    } else {
      addProduct(payload);
    }
    onDone && onDone();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <input
        className="form-control"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className="form-control"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        className="form-control"
        name="price"
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={handleChange}
        required
      />
      <input
        className="form-control"
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
        required
      />
      <button type="submit" className="float-right">
        {existing ? "Save" : "Add"}
      </button>
    </form>
  );
}
