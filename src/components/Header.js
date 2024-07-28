import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from './Assets/logo.png';
import accueil from './Assets/accueil.png';
import product from './Assets/product.png';
import contact from './Assets/contact.png';
import cart from './Assets/cart.png';

const Header = ({ cartItems }) => {
  return (
    <header>
      <img src={logo} className="header_logo" alt="Jarvis' Corp" />
      <nav>
        <Link to="/">
          <img src={accueil} className="header_icon" alt="Accueil" />
          <p>Accueil</p>
        </Link>
        <Link to="/products">
          <img src={product} className="header_icon" alt="Produits" />
          <p>Produits</p>
        </Link>
        {/* <Link to="/guide">Guide</Link> */}
        <Link to="/contact">
          <img src={contact} className="header_contact" alt="Contact" />
          <p>Contact</p>
        </Link>
        <Link to="/cart">
          <img src={cart} className="header_icon" alt="Panier" />
            <p>Panier</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
