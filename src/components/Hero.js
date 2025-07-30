import React from 'react';
import restauranfood from '../assets/restauranfood.jpg';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-description">
            We are a family owned Mediterranean restaurant, focused on 
            traditional recipes served with a modern twist.
          </p>
          <a href="/reservations" className="button">
            Reserve a Table
          </a>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image">
            <img
              src={restauranfood}
              alt="Hero placeholder"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
