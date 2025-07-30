import React from "react";
import logo from "../assets/Logo.svg";
import { NavHashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

// scrollWithOffset: scrolls into view minus header height
const scrollWithOffset = (el) => {
  const headerOffset = 80;
  const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
};

export default function Header() {
  const location = useLocation();
  const { pathname, hash } = location;

  return (
    <header role="banner" className="header-section">
      <div className="container header-container">
        <div className="logo">
          <Link
            smooth
            to="/#home"
            scroll={scrollWithOffset}
          >
            <img
              src={logo}
              alt="Little Lemon Logo"
              loading="lazy"
            />
          </Link>
        </div>

        <nav
          role="navigation"
          aria-label="Primary navigation"
          className="main-nav"
        >
          <ul role="menubar">
            <li role="none">
              <Link
                smooth
                to="/#home"
                scroll={scrollWithOffset}
                role="menuitem"
                aria-current={hash === "#home" ? "page" : undefined}
              >
                Home
              </Link>
            </li>

            <li role="none">
              <Link
                smooth
                to="/#about"
                scroll={scrollWithOffset}
                role="menuitem"
                aria-current={hash === "#about" ? "page" : undefined}
              >
                About
              </Link>
            </li>

            <li role="none">
              <Link
                smooth
                to="/#specials"
                scroll={scrollWithOffset}
                role="menuitem"
                aria-current={hash === "#specials" ? "page" : undefined}
              >
                Menu
              </Link>
            </li>

            <li role="none">
              <Link
                to="/reservations"
                role="menuitem"
                aria-current={pathname === "/reservations" ? "page" : undefined}
              >
                Reservations
              </Link>
            </li>

            <li role="none">
              <Link
                to="/order-online"
                role="menuitem"
                aria-current={pathname === "/order-online" ? "page" : undefined}
              >
                Order Online
              </Link>
            </li>

            <li role="none">
              <Link
                to="/login"
                role="menuitem"
                aria-current={pathname === "/login" ? "page" : undefined}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
