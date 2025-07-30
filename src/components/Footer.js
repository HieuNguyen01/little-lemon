import React from "react";
import logo from "../assets/Logo.svg";
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
    <footer className="footer-section" role="contentinfo">
      <div className="container footer-container">

        <div className="footer-logo">
          <Link
            smooth
            to="/#home"
            scroll={scrollWithOffset}
            aria-label="Go to homepage"
          >
            <img
              src={logo}
              alt="Little Lemon Logo"
              loading="lazy"
            />
          </Link>
        </div>

        <nav
          className="footer-nav"
          role="navigation"
          aria-label="Doormat Navigation"
        >
          <h4 className="footer-title">Doormat Navigation</h4>
          <ul role="list">
            <li role="listitem">
              <Link
                smooth
                to="/#home"
                scroll={scrollWithOffset}
                aria-label="Home"
              >
                Home
              </Link>
            </li>
            <li role="listitem">
              <Link
                smooth
                to="/#about"
                scroll={scrollWithOffset}
                aria-label="About"
              >
                About
              </Link>
            </li>
            <li role="listitem">
              <Link
                smooth
                to="/#specials"
                scroll={scrollWithOffset}
                aria-label="Menu"
              >
                Menu
              </Link>
            </li>
            <li role="listitem">
              <Link
                to="/reservations"
                aria-label="Reservations"
              >
                Reservations
              </Link>
            </li>
            <li role="listitem">
              <Link
                to="/order-online"
                aria-label="Order Online"
              >
                Order Online
              </Link>
            </li>
            <li role="listitem">
              <Link
                to="/login"
                aria-label="Login"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>

        <nav
          className="footer-nav"
          role="navigation"
          aria-label="Contact Information"
        >
          <h4 className="footer-title">Contact</h4>
          <ul role="list">
            <li role="listitem">
              <a href="#" aria-label="Address">Address</a>
            </li>
            <li role="listitem">
              <a href="#" aria-label="Phone number">Phone number</a>
            </li>
            <li role="listitem">
              <a href="#" aria-label="Email">Email</a>
            </li>
          </ul>
        </nav>

        <nav
          className="footer-nav"
          role="navigation"
          aria-label="Social Media Links"
        >
          <h4 className="footer-title">Social media links</h4>
          <ul role="list">
            <li role="listitem">
              <a href="#" aria-label="Facebook">Facebook</a>
            </li>
            <li role="listitem">
              <a href="#" aria-label="Instagram">Instagram</a>
            </li>
            <li role="listitem">
              <a href="#" aria-label="Twitter">Twitter</a>
            </li>
          </ul>
        </nav>

      </div>
    </footer>
  );
}
