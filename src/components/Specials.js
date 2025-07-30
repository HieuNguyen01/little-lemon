import React from 'react';
import bruc from '../assets/bruchetta.svg';
import greek from '../assets/greek salad.jpg';
import lemon from '../assets/lemon dessert.jpg';

const dishes = [
  {
    title: 'Greek Salad',
    price: '$12.99',
    img: greek,
    description: 'The famous greek salad of cripsy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
  },
  {
    title: 'Bruchetta',
    price: '$5.99',
    img: bruc,
    description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and also been seasoned with salt and olive oil.'
  },
  {
    title: 'Lemon Dessert',
    price: '$5.00',
    img: lemon,
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  }
]

export default function Specials() {
  return (
    <section id="specials" className="specials-section">
      <div className="container">
        <div className="specials-header">
          <h2 className="specials-title">This week's specials!</h2>
          <a href="/#specials" className="button">Online Menu</a>
        </div>
        <div className="specials-grid">
          {dishes.map((d) => (
            <article key={d.title} className="dish-card">
              <div className="dish-image">
                <img src={d.img} alt={d.title} loading="lazy"/>
              </div>
              <div className="dish-content">
                <div className="dish-header">
                  <h3 className="dish-title">{d.title}</h3>
                  <span className="dish-price">{d.price}</span>
                </div>
                <p className="dish-description">
                  {d.description}
                </p>
                <a href="/order-online" className="dish-delivery">
                  Order a delivery
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
