
import React from 'react';
import { BiCart } from 'react-icons/bi';
import '../styles.css';


const CartWidget = () => {
  return (
    <div className="cart-widget">
      <BiCart />
      <span className="badge bg-primary">3</span>
    </div>
  );
};

export default CartWidget;

