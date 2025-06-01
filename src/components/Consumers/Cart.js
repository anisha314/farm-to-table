import React from 'react';
import { useCart } from '../../contexts/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (cart.length === 0)
    return (
      <div className="page">
        <h2>Your cart is empty</h2>
      </div>
    );

  return (
    <div className="cart-page-container">
      <div className="cart-content">
    <div className="page">
      <h2>Your Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>
            Quantity:
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
            />
          </p>
          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
      <h3 className="total-price">Total Price: ₹{totalPrice}</h3>
      <button className="clear-btn" onClick={clearCart}>
        Clear Cart
      </button>
      <button
        className="checkout-btn"
        onClick={() => alert('Checkout feature coming soon!')}
      >
        Checkout
      </button>
    </div>
    </div>
    </div>
  );
};

export default Cart;
