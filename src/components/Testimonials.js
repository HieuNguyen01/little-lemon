import React from 'react';
import star from '../assets/star.svg';
import male from '../assets/male.png';
import female from '../assets/female.png';

const reviews = [
  { user: 'Alice', comment: 'Amazing food and vibe!', stars: 5, img: female },
  { user: 'Brad', comment: 'Best Mediterranean in town.', stars: 5, img: male },
  { user: 'Celine', comment: 'Cozy place, friendly staff.', stars: 4, img: female },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-grid">
          {reviews.map((r, i) => (
            <article key={i} className="review-card">
              <div className="review-rating">
                <span>Rating:</span>
                <div className="stars">
                  {[...Array(r.stars)].map((_, idx) => (
                    <img
                      key={idx}
                      src={star}
                      alt="star"
                      loading="lazy"
                    />
                  ))}
                </div>
                <span>({r.stars} stars)</span>
              </div>
              <div className="review-body">
                <div className="review-user-image">
                  <img src={r.img} alt="User avatar" />
                </div>
                <p className="review-comment">{r.comment}</p>
              </div>
              <p className="review-user-name">{r.user}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
