import React from "react";
import logo from '../assets/Logo.svg';
import { NavHashLink as Link } from "react-router-hash-link";

// scrollWithOffset: scrolls into view minus header height
const scrollWithOffset = (el) => {
  const headerOffset = 80;
  const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
};

export default function Header() {
  return (
    <header className="header-section">
      <div className="container header-container">
        <div className="logo">
          <Link smooth to="/#home" scroll={scrollWithOffset}>
            <img src={logo} alt="Little Lemon Logo" loading="lazy"/>
          </Link>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link smooth to="/#home" scroll={scrollWithOffset}>
                Home
              </Link>
            </li>
            <li>
              <Link smooth to="/#about" scroll={scrollWithOffset}>
                About
              </Link>
            </li>
            <li>
              <Link smooth to="/#specials" scroll={scrollWithOffset}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order-online">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
