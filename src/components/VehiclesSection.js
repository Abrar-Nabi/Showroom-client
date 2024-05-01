import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import './VehiclesSection.css'
import Swiper from "swiper";
import car1 from "./assets/images/cars/corolla.png";
import car2 from "./assets/images/cars/fortuner.png";
import car3 from "./assets/images/cars/hiaceVan.png";
import car4 from "./assets/images/cars/hilux.png";
import CheckOut from "./CheckOut";
import "swiper/swiper-bundle.css";

const VehiclesSection = () => {
  useEffect(() => {
    const swiper = new Swiper(".vehicles-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });

    
  }, []); 

  return (
    <section className="vehicles" id="vehicles">
      <h1 id="popVeh" className="heading">
        Popular Vehicles
      </h1>
      <div className="swiper vehicles-slider">
        <div className="swiper-wrapper">

          <div className="swiper-slide box">
            <img src={car1} alt="IMG 1" />
            <div className="content">
              <h3>Polo GT</h3>
              <div className="price">
                <span>Price:</span>&#8377; 3,75,000/-
              </div>
              <p>
                <del>New</del>
                <span className="fas fa-circle"></span>2021
                <span className="fas fa-circle"></span>Automatic
                <span className="fas fa-circle"></span>Petrol
                <span className="fas fa-circle"></span>160Km/h
              </p>
              <a href="/carsDetail/polo.html" target="_blank" className="btn checkOutBtn">
                Check Out
              </a>
            </div>
          </div>
          <div className="swiper-slide box">
            <img src={car2} alt="IMG 1" />
            <div className="content">
              <h3>Polo GT</h3>
              <div className="price">
                <span>Price:</span>&#8377; 3,75,000/-
              </div>
              <p>
                <del>New</del>
                <span className="fas fa-circle"></span>2021
                <span className="fas fa-circle"></span>Automatic
                <span className="fas fa-circle"></span>Petrol
                <span className="fas fa-circle"></span>160Km/h
              </p>
              <Link to={CheckOut} className="btn" >
              Check Out</Link>

            </div>
          </div>
          <div className="swiper-slide box">
            <img src={car3} alt="IMG 1" />
            <div className="content">
              <h3>Polo GT</h3>
              <div className="price">
                <span>Price:</span>&#8377; 3,75,000/-
              </div>
              <p>
                <del>New</del>
                <span className="fas fa-circle"></span>2021
                <span className="fas fa-circle"></span>Automatic
                <span className="fas fa-circle"></span>Petrol
                <span className="fas fa-circle"></span>160Km/h
              </p>
              <a href="/carsDetail/polo.html" target="_blank" className="btn">
                Check Out
              </a>
            </div>
          </div>
          <div className="swiper-slide box">
            <img src={car4} alt="IMG 1" />
            <div className="content">
              <h3>Polo GT</h3>
              <div className="price">
                <span>Price:</span>&#8377; 3,75,000/-
              </div>
              <p>
                <del>New</del>
                <span className="fas fa-circle"></span>2021
                <span className="fas fa-circle"></span>Automatic
                <span className="fas fa-circle"></span>Petrol
                <span className="fas fa-circle"></span>160Km/h
              </p>
              <a href="/carsDetail/polo.html" target="_blank" className="btn">
                Check Out
              </a>
            </div>
          </div>


        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default VehiclesSection;
