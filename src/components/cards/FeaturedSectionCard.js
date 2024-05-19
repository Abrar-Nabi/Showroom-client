import React from 'react';
import '../styles/FeaturedSectionCard.css';
const FeaturedSectionCard = ({ image, title, stars, price, link }) => {
    return (
        <div className="swiper-slide box">
            <img src={image} alt="featured car" />
            <h3>{title}</h3>
            <div className="stars">
                {stars.map((star, index) => (
                    <i key={index} className={`fas ${star}`}></i>
                ))}
            </div>
            <div className="price"> <i class="fa fa-inr"></i>{ price}/-</div>
            <a href={link}  className="btn">Check Out</a>
        </div>
    );
};

export default FeaturedSectionCard;
