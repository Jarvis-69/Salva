import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ cartItems }) => {
  return (
    <header>
      <h1>Magasin d'ordinateurs</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/guide">Guide</Link>
        <Link to="/cart">
          <div style={{ position: 'relative' }}>
            <FaShoppingCart size={24} color="white" />
            {cartItems.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '5px 10px',
                fontSize: '12px'
              }}>
                {cartItems.length}
              </span>
            )}
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
