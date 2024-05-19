import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; 
import ReviewCard from '../cards/ReviewsCards';
import '../styles/ReviewsCards.css'; 
import Review1 from "../assets/images/reviews/monica.jpg";
import Review2 from "../assets/images/reviews/abrar.jpg";
import Review3 from "../assets/images/reviews/abhishek.jpg";
import ReviewD from "../assets/images/reviews/default.jpg";

const Reviews = () => {
    useEffect(() => {
        const swiper = new Swiper(".reviews-slider", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
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
        <section className="reviews" id="reviews">
            <h1 className="heading">Client Reviews</h1>
            <div className="swiper reviews-slider">
                <div className="swiper-wrapper">
                    <ReviewCard
                        image={Review1}
                        name="Monica Bohra"
                        stars={4.5}
                        review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse magnam nobis, eos labore reiciendis id rem natus sequi odit!"
                    />
                    <ReviewCard
                        image={ReviewD}
                        name="Rohit Kumar"
                        stars={4.5}
                        review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse magnam nobis, eos labore reiciendis id rem natus sequi odit!"
                    />
                    <ReviewCard
                        image={Review2}
                        name="Abrar"
                        stars={4.5}
                        review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse magnam nobis, eos labore reiciendis id rem natus sequi odit!"
                    />
                    <ReviewCard
                        image={ReviewD}
                        name="Shubham Sharma"
                        stars={4.5}
                        review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse magnam nobis, eos labore reiciendis id rem natus sequi odit!"
                    />
                    <ReviewCard
                        image={Review3}
                        name="Abhishek Sharma"
                        stars={4.5}
                        review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse magnam nobis, eos labore reiciendis id rem natus sequi odit!"
                    />
                    {/* Add more ReviewCard components for other reviews */}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
};

export default Reviews;
