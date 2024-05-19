// ReviewCard.js
import React from 'react';

const ReviewCard = ({ image, name, stars, review }) => {
    return (
        <div className="swiper-slide box">
            <img src={image} alt={name} />
            <div className="content">
                <div className="stars">
                    {Array.from({ length: stars }, (_, index) => (
                        <i key={index} className="fas fa-star"></i>
                    ))}
                    {stars % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                </div>
                <h3>{name}</h3>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
