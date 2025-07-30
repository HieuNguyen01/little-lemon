import React from 'react';
import logo from '../assets/Logo.svg';
import { NavHashLink as Link } from "react-router-hash-link";

// scrollWithOffset: scrolls into view minus header height
const scrollWithOffset = (el) => {
  const headerOffset = 80;
  const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-logo">
          <Link smooth to="/#home"><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="footer-nav">
          <h4 className="footer-title">Doormat Navigation</h4>
          <ul>
            <li><Link smooth to="/#home">Home</Link></li>
            <li><Link to="#about">About</Link></li>
            <li><Link to="#specials">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
        <div className="footer-nav">
          <h4 className="footer-title">Contact</h4>
          <ul>
            <li><a href="#">Address</a></li>
            <li><a href="#">Phone number</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </div>
        <div className="footer-nav">
          <h4 className="footer-title">Social media links</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
