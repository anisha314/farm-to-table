import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { ref, push, onValue } from 'firebase/database';

const ProductForm = () => {
  const [form, setForm] = useState({ name: '', desc: '', price: '', available: '' });
  const [,setProducts] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productsRef = ref(db, 'products');
      await push(productsRef, form); // Push new product
      alert('Product listed!');
      setForm({ name: '', desc: '', price: '', available: '' });
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  useEffect(() => {
    const productsRef = ref(db, 'products');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const productList = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
      setProducts(productList);
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Add Product</h2>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" required />
        <input name="desc" value={form.desc} onChange={handleChange} placeholder="Description" required />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
        <input name="available" value={form.available} onChange={handleChange} placeholder="Available Quantity" required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ProductForm;
