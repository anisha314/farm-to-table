import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Use BrowserRouter as Router
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductForm from './components/Farmers/ProductForm';
import ProductList from './components/Consumers/ProductList';
import Cart from './components/Consumers/Cart';
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
      <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      <main className="app-content">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-product" element={<ProductForm />} />
      </Routes>
      </main>
      <footer className="app-footer">
      <Footer />
      </footer>
      </div>
    </Router>
  );
};

export default App;
