import React, { useState } from "react";

function AdminPanel({ products, addProduct, updateProduct, deleteProduct }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: ""
  });

  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateProduct({ ...formData, id: editingId });
      setEditingId(null);
    } else {
      addProduct({ ...formData, price: parseFloat(formData.price) });
    }
    setFormData({ name: "", description: "", image: "", price: "" });
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditingId(product.id);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control" placeholder="Name" value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input className="form-control" placeholder="Description" value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
        <input className="form-control" placeholder="Image URL" value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })} />
        <input className="form-control" placeholder="Price" type="number" value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
        <button type="submit">{editingId ? "Update" : "Add"}</button>
      </form>

      <ul>
        {products.map((p, index) => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button className="float-right" onClick={() => handleEdit(p)}>Edit</button>
            <button className="float-right" onClick={() => deleteProduct(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;

