import React from 'react';
// import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 Magasin d'ordinateurs. Tous droits réservés.</p>
        <div className="footer-links">
          <a href="/terms">Conditions d'utilisation</a>
          <a href="/privacy">Politique de confidentialité</a>
          <a href="/contact">Contactez-nous</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;