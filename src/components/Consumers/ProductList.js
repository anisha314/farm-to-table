import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { ref, onValue } from 'firebase/database';
import { useCart } from '../../contexts/CartContext'; // Import CartContext hook
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Use addToCart from context

  useEffect(() => {
    const productsRef = ref(db, 'products');

    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productsArray = Object.entries(data).map(([id, product]) => ({
          id,
          ...product,
        }));
        setProducts(productsArray);
      } else {
        setProducts([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div className="loading">Loading products...</div>;

  if (products.length === 0)
    return <div className="no-products">No products available.</div>;

  return (
    <div className="product-list-container">
      <h2>Available Products</h2>
      <div className="product-grid">
        {products.map(({ id, name, desc, price, available }) => (
          <div key={id} className="product-card">
            <h3>{name}</h3>
            <p className="description">{desc}</p>
            <p>
              <strong>Price:</strong> ${price}
            </p>
            <p>
              <strong>Available:</strong> {available}
            </p>
            <button
              className="buy-btn"
              onClick={() =>
                available > 0
                  ? addToCart({ id, name, desc, price, available })
                  : alert('Sorry, product out of stock')
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
