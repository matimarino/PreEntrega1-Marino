
import React from 'react';
import CartWidget from './CartWidgets';
import '../styles.css'

const NavBar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
        MyM´s
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="#">
                Componentes
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Perifericos
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Juegos
            </a>
            </li>
        </ul>
        </div>
        <CartWidget />
    </div>
    </nav>
);
};

export default NavBar;
