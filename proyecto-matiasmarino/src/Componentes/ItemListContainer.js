
import React from 'react';
import '../styles.css';

const ItemListContainer = ({ greeting }) => {
return (
    <div className="container">
    <h2>{greeting}</h2>
    <p>Descubre nuestras ofertas y productos exclusivos.</p>
    </div>
);
};

export default ItemListContainer;
