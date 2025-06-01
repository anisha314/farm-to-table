import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS for styling

const Home = () => {

  const [stats, setStats] = useState([]);

  const [infoCards] = useState([
    {
      id: 5,
      title: 'What is this app for?',
      content:
        'Farm-to-Table connects local farmers directly to consumers, ensuring fresh produce and fair prices.',
    },
    {
      id: 6,
      title: 'Advantages',
      content:
        'Enjoy fresh, seasonal products, support local farmers, and reduce your carbon footprint.',
    },
    {
      id: 7,
      title: 'How It Works',
      content:
        'Browse products, add to cart, and place orders. Farmers receive real-time demand updates for efficient harvesting.',
    },
  ]);

  useEffect(() => {
    const data = [
      { id: 1, title: 'Fresh Products', value: 120, icon: '🥦' },
      { id: 2, title: 'Farmers Connected', value: 45, icon: '🚜' },
      { id: 3, title: 'Orders Delivered', value: 300, icon: '📦' },
      { id: 4, title: 'Happy Customers', value: 250, icon: '😊' },
    ];

    setTimeout(() => {
      setStats(data);
    }, 500); // simulate delay
  }, []);
  

  return (
    <div className="home-container">
      <section className="hero-section">
  <div className="hero-text">
    <h1>Welcome to Farm-to-Table</h1>
    <p>Buy fresh, organic produce directly from local farmers near you.</p>
    <div className="hero-buttons">
      <Link to="/products" className="btn">Shop Now</Link>
      <Link to="/add-product" className="btn">List Your Products</Link>
    </div>
  </div>
</section>

    <div className="cards-container">
        {stats.length === 0 ? (
          <p>Loading stats...</p>
        ) : (
          stats.map(({ id, title, value, icon }) => (
            <div key={id} className="info-card">
              <div className="icon">{icon}</div>
              <h3>{value}</h3>
              <p>{title}</p>
            </div>
          ))
        )}
      </div>

        <div className="big-cards-container">
        {infoCards.map(({ id, title, content }) => (
          <div key={id} className="info-card big-square-card">
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
