import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div>
      <h2>Available Mobiles</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

