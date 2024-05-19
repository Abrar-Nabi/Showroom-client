import React, { useEffect } from 'react';
import FeaturedSectionCard from './FeaturedSectionCard';
import car1 from "./assets/images/cars/corolla.png";
import car2 from "./assets/images/cars/etios.png";
import car3 from "./assets/images/cars/innova.png";
import car4 from "./assets/images/cars/polo.png";
import car5 from "./assets/images/cars/verna.png";
import car6 from "./assets/images/cars/swift.png";
import car7 from "./assets/images/cars/kwid.png";
import car8 from "./assets/images/cars/beat.png";

import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const FeaturedSection = () => {
    useEffect(() => {
        const swiper = new Swiper('.featured-slider', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1040: {
                    slidesPerView: 3,
                },
            },
        });
        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <section className="featured" id="featured">
            <h1 className="heading">Featured Cars</h1>
            <div className="swiper featured-slider">
                <div className="swiper-wrapper">
                    <FeaturedSectionCard
                        image={car1}
                        title="Corolla"
                        stars={['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star-half-alt']}
                        price="4,75,000"
                    />
                    <FeaturedSectionCard
                        image={car2}
                        title="Cruze"
                        stars={['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star-half-alt']}
                        price="5,00,000"
                    />
                    <FeaturedSectionCard
                    image={car3}
                    title="Innova"
                    stars={['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star-half-alt']}
                    price="7,15,000"
                />
                <FeaturedSectionCard
                image={car4}
                title="Polo"
                stars={['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star-half-alt']}
                price="5,50,000"
            />
            <FeaturedSectionCard
                        image={car5}
                        title="Verna"
                        stars={['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star-half-alt']}
                        price="11,50,000"
                    />
                    <FeaturedSectionCard
                        image={car6}
                        title="Swift"
                        stars={['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star-half-alt']}
                        price="4,05,000"
                    />
                    <FeaturedSectionCard
                        image={car7}
                        title="Kwid"
                        stars={['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star-half-alt']}
                        price="3,75,000"
                    />
                    <FeaturedSectionCard
                        image={car8}
                        title="Beat"
                        stars={['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star-half-alt']}
                        price="2,65,000"
                    />
                    
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default FeaturedSection;
