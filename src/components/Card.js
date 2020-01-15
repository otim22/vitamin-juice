import React from 'react';
import LazyLoad from 'react-lazyload';
import './Card.css';

const Card = (props) => (
    <LazyLoad height={650} offset={-100}>
        <div className={props.card.animation}>
            <div className="front" onClick={() => props.showBack(props.card)}>
                <img src="juice.jpg" alt="vitamin juice" className="card-image" />
                <h3> <span className="vit-title">{props.card.type} &nbsp; </span> <span className="price">${props.card.price}</span></h3>
                <p>Need a jum on your vitamins while drinking? Tired of popping pills?
                    Drink our vitamins enhanced juice, available in several flavours.
                </p>
            </div>
            <div className="container-back back" onClick={() => props.showFront(props.card)}>
                <h3>Vitamin Juice <span className="price">${props.card.price}</span></h3>
                <p>{props.card.description}</p>
            </div>
        </div>
    </LazyLoad>
);

export default Card;
