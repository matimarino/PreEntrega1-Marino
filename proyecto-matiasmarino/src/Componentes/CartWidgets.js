
import React from 'react';
import '../styles.css'

const CartWidget = () => {
return (
    <div className="cart-widget">
    <i className="bi bi-cart"></i>
      <span className="badge bg-primary">3</span>{/* Hardcodea el número de elementos */}
    </div>
);
};

export default CartWidget;
