import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className={props.card.animation}>
        <div className="front" onClick={() => props.showBack(props.card)}>
            <img src="juice.jpg" alt="vitamin juice" className="card-image" />
            <h3>Vitamin Juice <span className="price">$24.99</span></h3>
            <p>Need a jum on your vitamins while drinking? Tired of popping pills?
                Drink our vitamins enhanced juice, available in several flavours.
            </p>
        </div>
        <div className="container-back back" onClick={() => props.showFront(props.card)}>
            <h3>Vitamin Juice <span className="price">$24.99</span></h3>
            <p>{props.card.description}
            </p>
        </div>
    </div>
);

export default Card;
