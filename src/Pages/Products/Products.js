import React, { useState } from 'react';
import './Products.css';
import { getProducts } from '../../API';

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 50 },
    { id: 6, name: 'Product 6', price: 60 },
  ]);

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      price: 0,
    };
    setProducts([...products, newProduct]);
  };

  const handleEditProduct = (productId) => {
    // Logic to handle editing a product
    console.log(`Editing product with ID: ${productId}`);
  };

  const handleRemoveProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - ${product.price}
          </span>
          <button onClick={() => handleEditProduct(product.id)}>Edit</button>
          <button onClick={() => handleRemoveProduct(product.id)}>
            Remove
          </button>
        </div>
      ))}
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default Products;
