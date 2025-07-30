import React from 'react';
import A from '../assets/Mario and Adrian A.jpg';
import B from '../assets/Mario and Adrian b.jpg';


export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-content">
          <h2 className="about-title">Little Lemon</h2>
          <h3 className="about-subtitle">Chicago</h3>
          <p className="about-description">
            We are a family owned Mediterranean restaurant, focused on 
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div className="about-images">
          <div className="about-image-a">
            <img src= {A} alt="Mario & Adrian 1" />
          </div>
          <div className="about-image-b">
            <img src={B} alt="Mario & Adrian 2" />
          </div>
        </div>
      </div>
    </section>
  );
}
