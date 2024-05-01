import React, { useEffect } from 'react';
import FeaturedSectionCard from './FeaturedSectionCard';
import car1 from "./assets/images/cars/corolla.png";
import car2 from "./assets/images/cars/fortuner.png";
import car3 from "./assets/images/cars/hiaceVan.png";
import car4 from "./assets/images/cars/hilux.png";
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
                        title="Cruze"
                        stars={['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star-half-alt']}
                        price="2,75,000"
                        link="/carsDetail/cruze.html"
                    />
                    <FeaturedSectionCard
                        image={car2}
                        title="Cruze"
                        stars={['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star-half-alt']}
                        price="2,75,000"
                        link="/carsDetail/cruze.html"
                    /><FeaturedSectionCard
                    image={car3}
                    title="Cruze"
                    stars={['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star-half-alt']}
                    price="2,75,000"
                    link="/carsDetail/cruze.html"
                /><FeaturedSectionCard
                image={car4}
                title="Cruze"
                stars={['fa-star', 'fa-star', 'fa-star', 'fa-star', 'fa-star-half-alt']}
                price="2,75,000"
                link="/carsDetail/cruze.html"
            />
                    
                    {/* Add more FeaturedSectionCard components for other featured cars */}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default FeaturedSection;
